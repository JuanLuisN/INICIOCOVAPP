const controller = {};

controller.list = (req, res) => 
{
    req.getConnection((err, conn) => 
    {  
      conn.query('SELECT * from hospitales', (err, hospitales) => 
      {
        if (err) 
        {
            res.json(err);
        }
        console.log(hospitales)

        conn.query('SELECT * FROM casos ORDER BY IdCasos DESC  LIMIT 1', (err, casos)=>{
          if(err)
          {
            res.json(err);
          }
          console.log(casos)
          res.render('hospitales', 
          {
              data: hospitales,
              casos:casos         
          });
        }) 
      });
    });
  };



module.exports = controller;