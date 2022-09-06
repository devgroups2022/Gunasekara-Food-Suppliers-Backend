const client = require('./connection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
// EMPLOYEE SECTION
// get all employees
client.connect();
app.get('/', (req, res)=>{
    client.query(`Select * from employee`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add employee
app.post('/employee', (req, res)=> {
    const employee = req.body;
    console.log(employee)
    let insertQuery = `insert into employee(code, name, nic, tp, address, date) values('${employee.code}','${employee.name}', '${employee.nic}', '${employee.tp}', '${employee.address}', '${employee.date}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Employee')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// update employee
app.put('/employee/:code', (req, res)=> {
    let employee = req.body;
    let updateQuery = `update employee
                       set name = '${employee.name}',
                       nic = '${employee.nic}',
                       tp = '${employee.tp}',
                       address = '${employee.address}',
                       date = '${employee.date}'
                       where code = ${employee.code}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update Employee')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// delete employee
app.delete('/employee/:code', (req, res)=> {
    let insertQuery = `delete from employee where code=${req.params.code}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion Employee')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// VEHICLE SERVICES

// get services
app.get('/service', (req, res)=>{
    client.query(`Select * from service`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add service
app.post('/service', (req, res)=> {
    const service = req.body;
    let insertQuery = `insert into service(number, present, next, date) 
                       values('${service.number}', '${service.present}', '${service.next}', '${service.date}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Service')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// get repair
app.get('/repair', (req, res)=>{
    client.query(`Select * from repair`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add repair
app.post('/repair', (req, res)=> {
    const service = req.body;
    let insertQuery = `insert into repair(number, date, discription, amount) 
                       values('${service.number}','${service.date}', '${service.discription}', '${service.amount}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Repair')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// get renew
app.get('/renew', (req, res)=>{
    client.query(`Select * from renew`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add renew
app.post('/renew', (req, res)=> {
    const renew = req.body;
    let insertQuery = `insert into renew(number, v_from, v_to) 
                       values('${renew.number}', '${renew.v_from}', '${renew.v_to}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added License')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// get insuarence
app.get('/insuarence', (req, res)=>{
    client.query(`Select * from insuarence`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add insuarence
app.post('/insuarence', (req, res)=> {
    const insuarence = req.body;
    let insertQuery = `insert into insuarence(number, v_from, v_to) 
                       values('${insuarence.number}', '${insuarence.v_from}', '${insuarence.v_to}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Insuarence')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
// get fuel
app.get('/fuel', (req, res)=>{
    client.query(`Select * from fuel`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add fuel
app.post('/fuel', (req, res)=> {
    const fuel = req.body;
    let insertQuery = `insert into fuel(number, date, liters) 
                       values('${fuel.number}', '${fuel.date}', '${fuel.liters}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Fuel')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// purchasing 
//add purchase data
app.post('/purchase', (req, res)=> {
    const purchase = req.body;
    let insertQuery = `insert into purchase(id, p_from, number, rp, r_price, br, b_price, bh, bh_price, peacock, p_price, discription) 
                       values('${purchase.id}', '${purchase.p_from}','${purchase.number}','${purchase.rp}','${purchase.r_price}','${purchase.br}','${purchase.b_price}','${purchase.bh}','${purchase.bh_price}','${purchase.peacock}','${purchase.p_price}','${purchase.discription}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Purchase')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// get purchases
app.get('/purchase', (req, res)=>{
    client.query(`Select * from purchase`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
// get purchases by date
 
app.get('/purchase/:id', (req, res)=>{
    client.query(`Select * from purchase where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// SELLING DATA me tika hadanna 
//add selling data
app.post('/sell', (req, res)=> {
    const sell = req.body;
    let insertQuery = `insert into sell(id, s_to, number, rp, r_price, br, b_price, bh, bh_price, peacock, p_price, discription) 
                       values('${sell.id}', '${sell.s_to}','${sell.number}','${sell.rp}','${sell.r_price}','${sell.br}','${sell.b_price}','${sell.bh}','${sell.bh_price}','${sell.peacock}','${sell.p_price}','${sell.discription}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added sell')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// get sells
app.get('/sell', (req, res)=>{
    client.query(`Select * from sell`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
// get sells by date
 
app.get('/sell/:id', (req, res)=>{
    client.query(`Select * from sell where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//  SUPPLIERS DETAILS
// get all suppliers

app.get('/supplier', (req, res)=>{
    client.query(`Select * from supplier`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add supplier
app.post('/supplier', (req, res)=> {
    const supplier = req.body;
    console.log(supplier)
    let insertQuery = `insert into supplier( id, name, tp, whatsapp, address, email) values('${supplier.id}','${supplier.name}','${supplier.tp}', '${supplier.whatsapp}', '${supplier.address}', '${supplier.email}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added supplier')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// update supplier
app.put('/supplier/:id', (req, res)=> {
    let supplier = req.body;
    let updateQuery = `update supplier
                       set name = '${supplier.name}',
                       tp = '${supplier.tp}',                  
                       whatsapp = '${supplier.whatsapp}',
                       address = '${supplier.address}',
                       email = '${supplier.email}'
                       where id = ${supplier.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update supplier')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// delete supplier
app.delete('/supplier/:id', (req, res)=> {
    let insertQuery = `delete from supplier where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion supplier')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// CUSTOMERS DETAILS
// get all customers

app.get('/supplier', (req, res)=>{
    client.query(`Select * from supplier`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// add customers
app.post('/customer', (req, res)=> {
    const customer = req.body;
    console.log(customer)
    let insertQuery = `insert into customer( id, name, tp, whatsapp, address, email) values('${customer.id}','${customer.name}','${customer.tp}', '${customer.whatsapp}', '${customer.address}', '${customer.email}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added Customer')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// update customers
app.put('/customer/:id', (req, res)=> {
    let customer = req.body;
    let updateQuery = `update customer
                       set name = '${customer.name}',
                       tp = '${customer.tp}',                  
                       whatsapp = '${customer.whatsapp}',
                       address = '${customer.address}',
                       email = '${customer.email}'
                       where id = ${customer.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update Customer')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// delete customers
app.delete('/customer/:id', (req, res)=> {
    let insertQuery = `delete from customer where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion Customer')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// ATTENDENCE
// get attendence
app.get('/attendence', (req, res)=>{
    client.query(`Select * from attendence ORDER BY id DESC`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// mark attendence
app.post('/attendence', (req, res)=> {
    const attendence = req.body;
    let insertQuery = `insert into attendence(id, date, time) 
                       values('${attendence.id}', '${attendence.date}', '${attendence.time}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Added attendence')
        }
        else{ console.log(err.message) }
    })
    client.end;
})