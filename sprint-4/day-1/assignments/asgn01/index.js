// Factory function for iPhone1
function iPhone1(ASIN, color, display, camera) {
    return {
      ASIN: ASIN,
      color: color,
      display: display,
      camera: camera,
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      }
    };
  }
  
  // Factory function for iPhone2
  function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
      ASIN: ASIN,
      color: color,
      display: display,
      camera: camera,
      bluetooth: bluetooth,
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      },
      connectBluetooth: function() {
        return "Bluetooth connected successfully...";
      }
    };
  }
  
  // Usage examples
  
  let i1 = iPhone1(
    1,
    "Gray",
    7.8,
    "2.0 MP"
  );
  
  console.log(i1.ASIN); // 1
  console.log(i1.color); // "Gray"
  console.log(i1.display); // 7.8
  console.log(i1.camera); // "2.0 MP"
  
  console.log(i1.dial()); // "tring.. tring..."
  console.log(i1.sendMessage()); // "Sending message..."
  console.log(i1.cameraClick()); // "Camera clicked"
  
  let i2 = iPhone2(
    1,
    "Gray",
    7.8,
    "IOS",
    "128GB"
  );
  
  console.log(i2.ASIN); // 1
  console.log(i2.color); // "Gray"
  console.log(i2.display); // 7.8
  console.log(i2.camera); // "IOS"
  console.log(i2.bluetooth); // "128GB"
  
  console.log(i2.dial()); // "tring.. tring..."
  console.log(i2.sendMessage()); // "Sending message..."
  console.log(i2.cameraClick()); // "Camera clicked"
  console.log(i2.connectBluetooth()); // "Bluetooth connected successfully..."
  