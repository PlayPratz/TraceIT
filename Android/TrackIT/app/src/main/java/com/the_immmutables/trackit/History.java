package com.the_immmutables.trackit;

import android.content.Intent;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;

import com.the_immmutables.trackit.Forms.InvoiceForm;

import java.util.ArrayList;

public class History extends AppCompatActivity {

	ListView invoiceList;
	FloatingActionButton newInvoice;
	ArrayList <Invoice> invoices = new ArrayList<>();
	InvoiceAdapter invoiceAdapter;
	Invoice temp;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_history);

		for(int i=0; i<10; i++){
			temp = new Invoice(Integer.toString(i));
			invoices.add(temp);
		}

		invoiceList = (ListView) findViewById(R.id.invoiceList);
		invoiceAdapter = new InvoiceAdapter(this, invoices);
		invoiceList.setAdapter(invoiceAdapter);

		newInvoice = (FloatingActionButton) findViewById(R.id.FAB_add);
		newInvoice.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(History.this, InvoiceForm.class);
				startActivity(intent);
			}
		});

	}
}
