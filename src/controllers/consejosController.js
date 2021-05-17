const controller = {};

controller.list = (req,res )=> {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM casos ORDER BY IdCasos DESC  LIMIT 1', (err, reg) =>{
            if(err){
                res.json(err);
            }
            console.log(reg);
            res.render('consejos',{
                casos:reg
            });            
        });
    });
};


module.exports = controller;