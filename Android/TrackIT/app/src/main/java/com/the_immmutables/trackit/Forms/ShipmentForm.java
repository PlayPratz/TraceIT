package com.the_immmutables.trackit.Forms;

import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;

import com.the_immmutables.trackit.R;

// Date arrived, quantity, remark, condition - condensation(0/1), holes(0/1), insect activity(0/1), packID, batchID

public class ShipmentForm extends AppCompatActivity {

	static final int REQUEST_IMAGE_CAPTURE = 1;
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
		quantity.setHint("Trader ID");


		ButtonOCR = (FloatingActionButton) findViewById(R.id.ocr_button);
		ButtonOCR.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				dispatchTakePictureIntent();
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
