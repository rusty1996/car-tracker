// require('./utils/scraper')();
// require('./utils/mailer')();
// const express = require('express');
// const bodyParser = require('body-parser');


// const app = express();
// const port = process.env.PORT || 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/api/scrape', async (req, res) => {

//     const { model, price, operator } = req.body;
    
//     const data = await Scraper(model, price, operator);
//     if (data) {
//         res.status(200).send({ arr: data });
//     } else {
//         res.status(400).send("Error");
//     }


//     }

// )

// app.post('/api/mailer', async (req, res) => {
//     const { results } = req.body;
//     const success = await sendToMail(results);
//     if (success) 
//         res.status(200).send();
//     else
//         res.status(400).send();
// })

// app.listen(port, () => console.log('listening'));