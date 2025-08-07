
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Acknowledgment Slip</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f8f9fa;
      font-family: 'Arial', sans-serif;
    }

    .slip {
      background-color: #fff;
      max-width: 250px;
      margin: 50px auto;
      padding: 40px 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.08);
    }

    .reg-number {
      text-align: end;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .reg-number span {
      font-size: 18px;
      font-weight: bold;
    }

    .title {
      text-align: center;
      margin-bottom: 30px;
    }

    .title h6 {
      letter-spacing: 1px;
      font-size: 7px;
      margin: 0;
    }

    .title h4 {
       font-weight: bold;
    letter-spacing: 1px;
    font-size: 15px;
    }

    .info-label {
      font-size: 9px;
      color: #666;
      margin-bottom: 2px;
    }

    .info-value {
      font-weight: 600;
      margin-bottom: 15px;
      text-transform: uppercase;
      font-size: 8px;
    }

    .pickup {
      font-weight: bold;
      font-size: 8px;
      margin-bottom: 20px;
    }

    .signature {
      font-size: 11px;
      text-align: center;
      margin-top: 40px;
    }

    .signature img {
      width: 60px;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <div class="slip">
    <div class="reg-number">Reg. No:<br><span>7829</span></div>

    <div class="title">
      <h6>ACKNOWLEDGMENT SLIP</h6>
      <h4>ORIGINAL COPY</h4>
    </div>

    <div>
      <div class="info-label">Customer Name</div>
      <div class="info-value">${form.fullName.value}</div>

      <div class="info-label">Make & Model</div>
      <div class="info-value">${form.Brand?.value || ""} ${form.Model?.value || ""} </div>

      <div class="info-label">Vehicle Number</div>
      <div class="info-value">${form.Car_Number?.value || ""}</div>

      <div class="info-label">Service Type</div>
      <div class="info-value">${selectedServices || ""}</div>

      <div class="info-label">Drop Location</div>
      <div class="info-value">${form.Store?.value || ""}</div>
<div class="d-flex justify-content-between ">
    <div>
          <div class="info-label">Pickup Date & Time</div>
      <div class="pickup">${form.dateInput?.value || ""} ,${form.timeInput?.value || ""}</div>
    </div>
      <div>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=HR92JF0033" alt="QR Code" class="qr-code" width="30px" height="30px">
</div>
</div>

    </div>

    <div class="signature">
      Signature & Acknowledgement<br>
      <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Signature_%28example%29.svg" alt="Signature"> -->
    </div>
  </div>
</body>
</html>
