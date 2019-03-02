package com.the_immmutables.trackit;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.the_immmutables.trackit.Forms.InvoiceForm;
import com.the_immmutables.trackit.Forms.PackingForm;

public class MainActivity extends AppCompatActivity {

	Button invoiceButton, packingButton, shipmentButton;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		invoiceButton = (Button) findViewById(R.id.imageInvoice);
		packingButton = (Button) findViewById(R.id.imagePacking);
		shipmentButton = (Button) findViewById(R.id.imageShipment);

		invoiceButton.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this, InvoiceForm.class);
				startActivity(intent);
			}
		});

		packingButton.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this, PackingForm.class);
				startActivity(intent);
			}
		});
	}
}
