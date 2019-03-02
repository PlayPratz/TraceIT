package com.the_immmutables.trackit.Forms;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.icu.text.SimpleDateFormat;
import android.icu.util.Calendar;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.Volley;
import com.the_immmutables.trackit.ConnectionManager;
import com.the_immmutables.trackit.R;

import org.json.JSONException;
import org.json.JSONObject;

// packID, PLinvoicenum, PLissuedate, EDA, Remark, Quantity, paymentID, batchID.

public class PackingForm extends AppCompatActivity {

	static final int REQUEST_IMAGE_CAPTURE = 1;

	static final String Link = ConnectionManager.URL + "/packingUploadRaw";
	//final Calendar calendar = Calendar.getInstance();

	Button submit;
	FloatingActionButton ButtonOCR;
	ImageView imageView;
	EditText traderID, invoiceID, issueDate, estimateDateArrival, remark, paymentID, batchID, quantity;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_packform);

		imageView = (ImageView) findViewById(R.id.imageView);
		submit = (Button) findViewById(R.id.submit);
		ButtonOCR = (FloatingActionButton) findViewById(R.id.ocr_button);
		ButtonOCR.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				dispatchTakePictureIntent();
			}
		});

		traderID = (EditText) findViewById(R.id.editText0);
		invoiceID = (EditText) findViewById(R.id.editText1);
		paymentID = (EditText) findViewById(R.id.editText2);
		batchID = (EditText) findViewById(R.id.editText3);
		issueDate = (EditText) findViewById(R.id.editDate1);
		estimateDateArrival = (EditText) findViewById(R.id.editDate2);
		remark = (EditText) findViewById(R.id.editText4);
		quantity = (EditText) findViewById(R.id.editQuantity);

		traderID.setHint("Trader ID");
		invoiceID.setHint("Invoice ID");
		paymentID.setHint("Payment ID");
		batchID.setHint("Batch ID");
		issueDate.setHint("Issue Date (DD/MM/YYYY)");
		estimateDateArrival.setHint("Estimate Date of Arrival (DD/MM/YYYY)");
		remark.setHint("Remark(s)");
		quantity.setHint("Quantity");

		submit.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				try {
					onSubmit();
				} catch (JSONException e) {
					e.printStackTrace();
				}
			}
		});
	}

	private void onSubmit() throws JSONException {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("traderID", traderID.getText());
		jsonObject.put("invoiceID", invoiceID.getText());
		jsonObject.put("paymentID", paymentID.getText());
		jsonObject.put("batchID", batchID.getText());
		jsonObject.put("issueDate", issueDate.getText());
		jsonObject.put("estimatedDate", estimateDateArrival.getText());
		jsonObject.put("quantity", quantity.getText());
		jsonObject.put("remark", remark.getText());

		RequestQueue requestQueue = Volley.newRequestQueue(this);
		ConnectionManager.syncData(jsonObject.toString(), requestQueue, Link, new ConnectionManager.VolleyCallback() {
			@Override
			public void onSuccessResponse(String result) {
				Toast toast = Toast.makeText(PackingForm.this,
						"Hurray!", Toast.LENGTH_LONG);
				toast.show();

			}

			@Override
			public void onErrorResponse(VolleyError error) {
				Toast toast = Toast.makeText(PackingForm.this,
						":(", Toast.LENGTH_LONG);
				toast.show();

			}
		});
	}

	private void dispatchTakePictureIntent() {
		Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
		if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
			startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
		}
	}

	@Override
	protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
		//super.onActivityResult(requestCode, resultCode, data);
		Log.i("tracker1234", data.getExtras().toString());
		Bitmap image = (Bitmap) data.getExtras().get("data");
		imageView.setImageBitmap(image);
	}
}
