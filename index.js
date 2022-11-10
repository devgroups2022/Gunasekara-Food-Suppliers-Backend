const client = require("./connection.js");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
app.use(cors());
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
// EMPLOYEE SECTION
// get all employees
client.connect();
app.get("/", (req, res) => {
  client.query(`Select * from employee`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add employee
app.post("/employee", (req, res) => {
  const employee = req.body;
  console.log(employee);
  let insertQuery = `insert into employee(code, name, nic, tp, address, date) values('${employee.code}','${employee.name}', '${employee.nic}', '${employee.tp}', '${employee.address}', '${employee.date}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Employee");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update employee
app.put("/employee/:code", (req, res) => {
  let employee = req.body;
  let updateQuery = `update employee
                       set name = '${employee.name}',
                       nic = '${employee.nic}',
                       tp = '${employee.tp}',
                       address = '${employee.address}',
                       date = '${employee.date}'
                       where code = ${employee.code}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Updated Employee");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete employee
app.delete("/employee/:code", (req, res) => {
  let insertQuery = `delete from employee where code=${req.params.code}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deleted Employee");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// VEHICLE SERVICES

// get services
app.get("/service", (req, res) => {
  client.query(`Select * from service`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add service
app.post("/service", (req, res) => {
  const service = req.body;
  let insertQuery = `insert into service(number, present, next, date) 
                       values('${service.number}', '${service.present}', '${service.next}', '${service.date}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Service");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// get repair
app.get("/repair", (req, res) => {
  client.query(`Select * from repair`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add repair
app.post("/repair", (req, res) => {
  const service = req.body;
  let insertQuery = `insert into repair(number, date, discription, amount) 
                       values('${service.number}','${service.date}', '${service.discription}', '${service.amount}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Repair");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// get renew
app.get("/renew", (req, res) => {
  client.query(`Select * from renew`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add renew
app.post("/renew", (req, res) => {
  const renew = req.body;
  let insertQuery = `insert into renew(number, v_from, v_to) 
                       values('${renew.number}', '${renew.v_from}', '${renew.v_to}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added License");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// get insuarence
app.get("/insuarence", (req, res) => {
  client.query(`Select * from insuarence`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add insuarence
app.post("/insuarence", (req, res) => {
  const insuarence = req.body;
  let insertQuery = `insert into insuarence(number, v_from, v_to) 
                       values('${insuarence.number}', '${insuarence.v_from}', '${insuarence.v_to}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Insuarence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// get fuel
app.get("/fuel", (req, res) => {
  client.query(`Select * from fuel`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add fuel
app.post("/fuel", (req, res) => {
  const fuel = req.body;
  let insertQuery = `insert into fuel(number, date, liters) 
                       values('${fuel.number}', '${fuel.date}', '${fuel.liters}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Fuel");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// PURCHASING
//add purchase data
app.post("/purchase", (req, res) => {
  const purchase = req.body;
  let insertQuery = `insert into purchase(id, p_from, number, rp, r_price, tot_rp, br, br_price, tot_br, bh, bh_price, tot_bh, peacock, pe_price, tot_pe, tot_price, discription) 
  values('${purchase.id}', '${purchase.p_from}','${purchase.number}','${purchase.rp}','${purchase.r_price}','${purchase.tot_rp}','${purchase.br}','${purchase.br_price}','${purchase.tot_br}','${purchase.bh}','${purchase.bh_price}','${purchase.tot_bh}','${purchase.peacock}','${purchase.pe_price}','${purchase.tot_pe}','${purchase.tot_price}','${purchase.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Purchase");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// get purchases
app.get("/purchase", (req, res) => {
  client.query(`Select * from purchase`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});
// get purchases by date

app.get("/purchase/:id", (req, res) => {
  client.query(
    `Select * from purchase where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

// SELLING
//add selling data
app.post("/sale", (req, res) => {
  const sell = req.body;
  let insertQuery = `insert into sell(id, s_to, number, rp, r_price, tot_rp, br, br_price, tot_br, bh, bh_price, tot_bh, peacock, pe_price, tot_pe, tot_price, discription) 
                       values('${sell.id}', '${sell.s_to}','${sell.number}','${sell.rp}','${sell.r_price}','${sell.tot_rp}','${sell.br}','${sell.br_price}','${sell.tot_br}','${sell.bh}','${sell.bh_price}','${sell.tot_bh}','${sell.peacock}','${sell.pe_price}','${sell.tot_pe}','${sell.tot_price}','${sell.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added sell");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// get sells
app.get("/sale", (req, res) => {
  client.query(`Select * from sell`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});
// get sells by date

app.get("/sale/:id", (req, res) => {
  client.query(
    `Select * from sell where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//  SUPPLIERS DETAILS
// get all suppliers

app.get("/supplier", (req, res) => {
  client.query(`Select * from supplier`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add supplier
app.post("/supplier", (req, res) => {
  const supplier = req.body;
  console.log(supplier);
  let insertQuery = `insert into supplier( id, name, tp, whatsapp, address, email) values('${supplier.id}','${supplier.name}','${supplier.tp}', '${supplier.whatsapp}', '${supplier.address}', '${supplier.email}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added supplier");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update supplier
app.put("/supplier/:id", (req, res) => {
  let supplier = req.body;
  let updateQuery = `update supplier
                       set name = '${supplier.name}',
                       tp = '${supplier.tp}',                  
                       whatsapp = '${supplier.whatsapp}',
                       address = '${supplier.address}',
                       email = '${supplier.email}'
                       where id = ${supplier.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update supplier");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete supplier
app.delete("/supplier/:id", (req, res) => {
  let insertQuery = `delete from supplier where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion supplier");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// CUSTOMERS DETAILS
// get all customers

app.get("/supplier", (req, res) => {
  client.query(`Select * from supplier`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add customers
app.post("/customer", (req, res) => {
  const customer = req.body;
  console.log(customer);
  let insertQuery = `insert into customer( id, name, tp, whatsapp, address, email) values('${customer.id}','${customer.name}','${customer.tp}', '${customer.whatsapp}', '${customer.address}', '${customer.email}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Customer");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update customers
app.put("/customer/:id", (req, res) => {
  let customer = req.body;
  let updateQuery = `update customer
                       set name = '${customer.name}',
                       tp = '${customer.tp}',                  
                       whatsapp = '${customer.whatsapp}',
                       address = '${customer.address}',
                       email = '${customer.email}'
                       where id = ${customer.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update Customer");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete customers
app.delete("/customer/:id", (req, res) => {
  let insertQuery = `delete from customer where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion Customer");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// ATTENDENCE
// get attendence
app.get("/attendence", (req, res) => {
  client.query(`Select * from attendence ORDER BY cod DESC`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// mark attendence
app.post("/attendence", (req, res) => {
  const attendence = req.body;
  let insertQuery = `insert into attendence(cod, date, time, discription) 
                       values('${attendence.cod}', '${attendence.date}', '${attendence.time}', '${attendence.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added attendence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// BUYER CASH BALENCE
// get all balence
client.connect();
app.get("/balence", (req, res) => {
  client.query(`Select * from buyers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add balence
app.post("/addbalence", (req, res) => {
  const balence = req.body;
  console.log(balence);
  let insertQuery = `insert into buyers(id, name, date, total, balence, arrears, discription) values('${balence.id}','${balence.name}', '${balence.date}', '${balence.total}', '${balence.balence}', '${balence.arrears}', '${balence.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update balence
app.put("/balence/:id", (req, res) => {
  let balence = req.body;
  let updateQuery = `update buyers
                       set name = '${balence.name}',
                       date = '${balence.date}',
                       total = '${balence.total}',
                       balence = '${balence.balence}',
                       arrears = '${balence.arrears}',
                       discription = '${balence.discription}'
                       where id = ${balence.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Updated Buyer");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete balence
app.delete("/balence/:id", (req, res) => {
  let insertQuery = `delete from buyers where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deleted Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// end of balence

// SELLER CASH BALENCE
// get all seller balence
client.connect();
app.get("/sellerbalence", (req, res) => {
  client.query(`Select * from sellers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add seller balence
app.post("/addsellerbalence", (req, res) => {
  const sellers = req.body;
  console.log(sellers);
  let insertQuery = `insert into sellers(id, name, date, total, balence, arrears, discription) values('${sellers.id}','${sellers.name}', '${sellers.date}', '${sellers.total}', '${sellers.balence}', '${sellers.arrears}', '${sellers.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Seller Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update seller balence
app.put("/sellerbalence/:id", (req, res) => {
  let sellers = req.body;
  let updateQuery = `update sellers
                       set name = '${sellers.name}',
                       date = '${sellers.date}',
                       total = '${sellers.total}',
                       balence = '${sellers.balence}',
                       arrears = '${sellers.arrears}',
                       discription = '${sellers.discription}'
                       where id = ${sellers.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Updated Seller Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete seller balence
app.delete("/sellerbalence/:id", (req, res) => {
  let insertQuery = `delete from sellers where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deleted Seller Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// end of seller balence

// EMPLOYEE CASH BALENCE
// get all employee cash balence
client.connect();
app.get("/empcashbal", (req, res) => {
  client.query(`Select * from employeecash`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add seller employee cash balence
app.post("/addempcashbal", (req, res) => {
  const employeecash = req.body;
  console.log(employeecash);
  let insertQuery = `insert into employeecash(id, name, date, amount, discription) values('${employeecash.id}','${employeecash.name}', '${employeecash.date}', '${employeecash.amount}', '${employeecash.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Employee Cash Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update seller employee cash balence
app.put("/empcashbal/:id", (req, res) => {
  let employeecash = req.body;
  let updateQuery = `update employeecash
                       set name = '${employeecash.name}',
                       date = '${employeecash.date}',
                       amount = '${employeecash.amount}',
                       discription = '${employeecash.discription}'
                       where id = ${employeecash.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Updated Employee Cash Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete seller employee cash balence
app.delete("/empcashbal/:id", (req, res) => {
  let insertQuery = `delete from employeecash where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deleted Employee Cash Balence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// end of cash balence

// DAILY CASH EXPENCES OR BANK ACCOUNT
// get cash expence
client.connect();
app.get("/expence", (req, res) => {
  client.query(`Select * from cash`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add cash expence
app.post("/expence", (req, res) => {
  const cash = req.body;
  console.log(cash);
  let insertQuery = `insert into cash(id, date, amount, discription) values('${cash.id}', '${cash.date}', '${cash.amount}', '${cash.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Daily Expences");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update cash expence
app.put("/expence/:id", (req, res) => {
  let cash = req.body;
  let updateQuery = `update cash
                       set date = '${cash.date}',
                       amount = '${cash.amount}',
                       discription = '${cash.discription}'
                       where id = ${cash.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Updated Daily Expence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete cash expence
app.delete("/expence/:id", (req, res) => {
  let insertQuery = `delete from cash where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deleted Daily Expence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// end of daily cash

// DAILY EXPENCES FROM BANK ACCOUNT
// get account expence
client.connect();
app.get("/accoexpence", (req, res) => {
  client.query(`Select * from account`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// add account expence
app.post("/accoexpence", (req, res) => {
  const account = req.body;
  console.log(account);
  let insertQuery = `insert into account(id, date, amount, discription) values('${account.id}', '${account.date}', '${account.amount}', '${account.discription}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added Daily Account Expences");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// update account expence
app.put("/accoexpence/:id", (req, res) => {
  let account = req.body;
  let updateQuery = `update account
                       set date = '${account.date}',
                       amount = '${account.amount}',
                       discription = '${account.discription}'
                       where id = ${account.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Updated Daily Account Expence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// delete account expence
app.delete("/accoexpence/:id", (req, res) => {
  let insertQuery = `delete from account where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deleted Daily Account Expence");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// end of daily account expences

// NEXT SECTIONS
