package com.the_immmutables.trackit;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;

public class InvoiceAdapter extends BaseAdapter {

	private Context context;
	private ArrayList<Invoice> invoiceArrayList;

	public InvoiceAdapter(Context context, ArrayList<Invoice> invoiceArrayList) {
		this.context = context;
		this.invoiceArrayList = invoiceArrayList;
	}

	@Override
	public int getCount() {
		return invoiceArrayList.size();
	}

	@Override
	public Object getItem(int position) {
		return invoiceArrayList.get(position);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		if(convertView==null) {
			convertView = LayoutInflater.from(context).inflate(R.layout.invoice_item, parent, false);
		}

		final Invoice currentItem = (Invoice) getItem(position);
		TextView invoiceIDtext = (TextView) convertView.findViewById(R.id.invoice_ID);
		invoiceIDtext.setText(currentItem.getID());

		return convertView;
	}
}
