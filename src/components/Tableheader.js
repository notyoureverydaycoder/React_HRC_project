import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'Customername', headerName: 'Customer Name', width: 160 },
  {
    field: 'Customer',
    headerName: 'Customer #',
    type: 'number',
    width: 130,
  },
  {
    field: 'Invoice',
    headerName: 'Invoice #',
    type: 'number',
    width: 130,
  },

  { field: 'InvoiceAmount', headerName: 'Invoice Amount', width: 160 },
  { field: 'DueDate', headerName: 'Due Date', width: 130 },
  { field: 'paymentdate', headerName: 'Predicted Payment Date', width: 220 },
  { field: 'predictedbucket', headerName: 'Predicted Aging Bucket', width: 230 },
  { field: 'Notes', headerName: 'Notes', width: 130 },
];

const rows = [
  { id:1, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:2, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:3, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:4, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:5, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:6, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:7, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:8, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:9, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:10, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:11, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:12, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:13, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:14, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:15, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:16, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:17, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:18, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:19, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:20, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:21, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:22, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:23, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:24, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:25, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:26, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:27, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},
  { id:28, Customername: 'Sabarish', Customer: '232342', Invoice: '2334356464', InvoiceAmount: '123.4k', DueDate: '12-JAN-2020', paymentdate: '--', predictedbucket:'--',Notes: 'Hello Sabarish...'},

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={30} checkboxSelection />
    </div>
  );
}
