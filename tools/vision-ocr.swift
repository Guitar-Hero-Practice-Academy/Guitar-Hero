import Foundation
import Vision
import AppKit

let imagePaths = CommandLine.arguments.dropFirst()

if imagePaths.isEmpty {
  fputs("Usage: vision-ocr.swift image...\n", stderr)
  exit(1)
}

for imagePath in imagePaths {
  print("===== \(imagePath) =====")
  guard
    let image = NSImage(contentsOfFile: imagePath),
    let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
  else {
    print("[could not load image]")
    continue
  }

  let request = VNRecognizeTextRequest { request, error in
    if let error = error {
      print("[ocr error: \(error.localizedDescription)]")
      return
    }

    let observations = (request.results as? [VNRecognizedTextObservation]) ?? []
    let lines = observations
      .compactMap { observation -> (CGFloat, CGFloat, String)? in
        guard let candidate = observation.topCandidates(1).first else { return nil }
        return (observation.boundingBox.minY, observation.boundingBox.minX, candidate.string)
      }
      .sorted { left, right in
        if abs(left.0 - right.0) > 0.01 {
          return left.0 > right.0
        }
        return left.1 < right.1
      }

    for (_, _, text) in lines {
      print(text)
    }
  }

  request.recognitionLevel = .accurate
  request.usesLanguageCorrection = false

  let handler = VNImageRequestHandler(cgImage: cgImage)
  do {
    try handler.perform([request])
  } catch {
    print("[ocr failed: \(error.localizedDescription)]")
  }
}
