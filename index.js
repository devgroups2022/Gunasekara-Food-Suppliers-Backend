const pool = require('./connection.js')
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
// EMPLOYEE SECTION
// get all employees
app.get('/', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from employee`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// add employee
app.post('/employee', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let employee = req.body;
        let result = await client.query(`insert into employee(code, name, nic, tp, address, date) values('${employee.code}','${employee.name}', '${employee.nic}', '${employee.tp}', '${employee.address}', '${employee.date}')`)

        res.send("added")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})


//// update employee
app.put('/employee', async (req, res, next)=>{
    const client = await pool.connect();
    try {
    let employee = req.body;
    let result = await client.query(`update employee
                       set name = '${employee.name}',
                       nic = '${employee.nic}',
                       tp = '${employee.tp}',
                       address = '${employee.address}',
                       date = '${employee.date}'
                       where code = ${employee.code}`)

                       res.send("updated")
                    } catch (err){
                        next(err);
                    } finally {
                        client.release()
                    }
})

// delete employee
app.delete('/employee/:code', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let employee = req.body;
        let result = await client.query(`delete from employee where code=${req.params.code}`)

        res.send("deleted")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

//// VEHICLE SERVICES
app.get('/service', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from service`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// add service
app.post('/service', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let service = req.body;
        let result = await client.query(`insert into service(number, present, next, date) values('${service.number}', '${service.present}', '${service.next}', '${service.date}')`)

        res.send("added service")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// get repair
app.get('/repair', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from repair`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})


// add repair
app.post('/repair', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let repair = req.body;
        let result = await client.query(`insert into repair(number, date, discription, amount) values('${repair.number}','${repair.date}', '${repair.discription}', '${repair.amount}')`)

        res.send("added repair")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

//// get renew
app.get('/renew', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from renew`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// add renew
// add employee
app.post('/renew', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let renew = req.body;
        let result = await client.query(`insert into renew(number, v_from, v_to) values('${renew.number}', '${renew.v_from}', '${renew.v_to}')`)

        res.send("added renew")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// get insuarence
app.get('/insuarence', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from insuarence`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// add insuarence
app.post('/insuarence', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let insuarence = req.body;
        let result = await client.query(`insert into insuarence(number, v_from, v_to) values('${insuarence.number}', '${insuarence.v_from}', '${insuarence.v_to}')`)

        res.send("added insuarence")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

//// get fuel
app.get('/fuel', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from fuel`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// add fuel
app.post('/fuel', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let fuel = req.body;
        let result = await client.query(`insert into fuel(number, date, liters) values('${fuel.number}', '${fuel.date}', '${fuel.liters}')`)

        res.send("added fuel")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// purchasing 
//add purchase data
app.post('/purchase', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let purchase = req.body;
        let result = await client.query(`insert into purchase(id, p_from, number, rp, r_price, br, b_price, bh, bh_price, peacock, p_price, discription) values('${purchase.id}', '${purchase.p_from}','${purchase.number}','${purchase.rp}','${purchase.r_price}','${purchase.br}','${purchase.b_price}','${purchase.bh}','${purchase.bh_price}','${purchase.peacock}','${purchase.p_price}','${purchase.discription}')`)

        res.send("added purchasing")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// get purchases
app.get('/purchase', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from purchase`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// get purchases by date
app.get('/purchase/:id', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from purchase where id=${req.params.id}`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// SELLING DATA me tika hadanna 
//add selling data
app.post('/sell', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let sell = req.body;
        let result = await client.query(`insert into sell(id, s_to, number, rp, r_price, br, b_price, bh, bh_price, peacock, p_price, discription) values('${sell.id}', '${sell.s_to}','${sell.number}','${sell.rp}','${sell.r_price}','${sell.br}','${sell.b_price}','${sell.bh}','${sell.bh_price}','${sell.peacock}','${sell.p_price}','${sell.discription}')`)

        res.send("added")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// get sells
app.get('/sell', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from sell`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// get sells by date
app.get('/sell/:id', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from sell where id=${req.params.id}`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

//  SUPPLIERS DETAILS
// get all suppliers
app.get('/supplier', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from supplier`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// add supplier
app.post('/supplier', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let supplier = req.body;
        let result = await client.query(`insert into supplier( id, name, tp, whatsapp, address, email) values('${supplier.id}','${supplier.name}','${supplier.tp}', '${supplier.whatsapp}', '${supplier.address}', '${supplier.email}')`)

        res.send("added supplier")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// update supplier
app.put('/supplier/:id', async (req, res, next)=>{
    const client = await pool.connect();
    try {
    let supplier = req.body;
    let result = await client.query(`update supplier
                            set name = '${supplier.name}',
                            tp = '${supplier.tp}',                  
                            whatsapp = '${supplier.whatsapp}',
                            address = '${supplier.address}',
                            email = '${supplier.email}'
                            where id = ${supplier.id}`)

                       res.send("updated supplier")
                    } catch (err){
                        next(err);
                    } finally {
                        client.release()
                    }
})
// delete supplier
app.delete('/supplier/:id', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let suppiler = req.body;
        let result = await client.query(`delete from supplier where id=${req.params.id}`)

        res.send("deleted supplier")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// CUSTOMERS DETAILS
// get all customers
app.get('/customer', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from customer`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// add customers
app.post('/customer', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let customer = req.body;
        let result = await client.query(`insert into customer( id, name, tp, whatsapp, address, email) values('${customer.id}','${customer.name}','${customer.tp}', '${customer.whatsapp}', '${customer.address}', '${customer.email}')`)

        res.send("added customer")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})

// update customers
app.put('/customer/:id', async (req, res, next)=>{
    const client = await pool.connect();
    try {
    let customer = req.body;
    let result = await client.query(`update customer
                            set name = '${customer.name}',
                            tp = '${customer.tp}',                  
                            whatsapp = '${customer.whatsapp}',
                            address = '${customer.address}',
                            email = '${customer.email}'
                            where id = ${customer.id}`)

                       res.send("updated customer")
                    } catch (err){
                        next(err);
                    } finally {
                        client.release()
                    }
})
// delete customers
app.delete('/customer/:id', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let customer = req.body;
        let result = await client.query(`delete from customer where id=${req.params.id}`)

        res.send("deleted customer")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// ATTENDENCE
// get attendence
app.get('/attendence', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        const result = await client.query(`Select * from attendence ORDER BY id DESC`);
        res.send(result.rows)
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
// mark attendence methana idala karanna tiyenawa db eketh ekkama check karala
app.post('/attendence', async (req, res, next)=>{
    const client = await pool.connect();
    try {
        let attendence = req.body;
        let result = await client.query(`insert into attendence(id, date, time) values('${attendence.id}', '${attendence.date}', '${attendence.time}')`)

        res.send("Marked")
    } catch (err){
        next(err);
    } finally {
        client.release()
    }
})
//app.post('/attendence', (req, res)=> {
//    const attendence = req.body;
//    let insertQuery = `insert into attendence(id, date, time) values('${attendence.id}', '${attendence.date}', '${attendence.time}')`
//
//    pool.query(insertQuery, (err, result)=>{
//        if(!err){
//            res.send('Added attendence')
//        }
//        else{ console.log(err.message) }
//    })
//    pool.end;
//})