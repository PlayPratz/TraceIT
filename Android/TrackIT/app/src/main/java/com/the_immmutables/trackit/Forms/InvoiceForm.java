package com.the_immmutables.trackit.Forms;

import android.content.Intent;
import android.graphics.Bitmap;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.Volley;
import com.the_immmutables.trackit.ConnectionManager;
import com.the_immmutables.trackit.Invoice;
import com.the_immmutables.trackit.R;

import org.json.JSONException;
import org.json.JSONObject;

// Trader id, amount, quantity, batchID.

public class InvoiceForm extends AppCompatActivity {

	static final int REQUEST_IMAGE_CAPTURE = 1;
	static final String Link = ConnectionManager.URL+"/paymentUploadRaw";


	Button submit;
	FloatingActionButton ButtonOCR;
	ImageView imageView;
	EditText traderID, batchID, amount, quantity;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_form);

		imageView = (ImageView) findViewById(R.id.imageView);

		traderID = (EditText) findViewById(R.id.editText0);
		batchID = (EditText) findViewById(R.id.editText1);
		amount = (EditText) findViewById(R.id.editNumber);
		quantity = (EditText) findViewById(R.id.editQuantity);

		traderID.setHint("Trader ID");
		batchID.setHint("Batch ID");
		amount.setHint("Amount ID");
		quantity.setHint("Quantity");


		ButtonOCR = (FloatingActionButton) findViewById(R.id.ocr_button);
		ButtonOCR.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				dispatchTakePictureIntent();
			}
		});

		submit = (Button) findViewById(R.id.submit);
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

	private void dispatchTakePictureIntent() {
		Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
		if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
			startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
		}
	}

	private void onSubmit() throws JSONException {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("traderID", traderID.getText());
		jsonObject.put("batchID", batchID.getText());
		jsonObject.put("amount", amount.getText());
		jsonObject.put("quantity", quantity.getText());

		RequestQueue requestQueue = Volley.newRequestQueue(this);
		ConnectionManager.syncData(jsonObject.toString(), requestQueue, Link, new ConnectionManager.VolleyCallback() {
			@Override
			public void onSuccessResponse(String result) {
				Toast toast = Toast.makeText(InvoiceForm.this,
						"Hurray!", Toast.LENGTH_LONG);
				toast.show();

			}

			@Override
			public void onErrorResponse(VolleyError error) {
				Toast toast = Toast.makeText(InvoiceForm.this,
						":(", Toast.LENGTH_LONG);
				toast.show();

			}
		});
	}

	@Override
	protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
		//super.onActivityResult(requestCode, resultCode, data);
		Log.i("tracker1234", data.getExtras().toString());
		Bitmap image = (Bitmap) data.getExtras().get("data");
		imageView.setImageBitmap(image);
	}
}
