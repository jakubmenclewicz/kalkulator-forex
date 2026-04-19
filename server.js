const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TWOJE ROUTINGI (BEZ ZMIAN)
app.get('/', (req, res) => { res.render('index'); });
app.get('/position-size', (req, res) => { res.render('calculators/position-size'); });
app.get('/stop-loss-tp', (req, res) => { res.render('calculators/stop-loss-tp'); });
app.get('/profit-loss', (req, res) => { res.render('calculators/profit-loss'); });
app.get('/pip-value', (req, res) => { res.render('calculators/pip-value'); });
app.get('/margin', (req, res) => { res.render('calculators/margin'); });
app.get('/fibonacci', (req, res) => { res.render('calculators/fibonacci'); });
app.get('/pivot-points', (req, res) => { res.render('calculators/pivot-points'); });
app.get('/risk-reward', (req, res) => { res.render('calculators/risk-reward'); });
app.get('/leverage', (req, res) => { res.render('calculators/leverage'); });
app.get('/compounding', (req, res) => { res.render('calculators/compounding'); });
app.get('/pips-calculator', (req, res) => { res.render('calculators/pips-calculator'); });
app.get('/drawdown-recovery-calculator', (req, res) => { res.render('calculators/drawdown-recovery-calculator'); });
app.get('/tp-sl-calculator', (req, res) => { res.render('calculators/tp-sl-calculator'); });
app.get('/portfolio-risk', (req, res) => { res.render('calculators/portfolio-risk'); });
app.get('/breakeven', (req, res) => { res.render('calculators/breakeven'); });

// NOWY ENDPOINT DLA NEWSLETTERA (ZAPIS DO PLIKU)
app.post('/subscribe', (req, res) => {
    const { name, email, country } = req.body;
    const date = new Date().toISOString().replace(/T/, ' ').split('.')[0];
    const logEntry = `${date} | Name: ${name} | Email: ${email} | Country: ${country}\n`;

    fs.appendFile(path.join(__dirname, 'subscribers.txt'), logEntry, (err) => {
        if (err) {
            console.error('Błąd zapisu:', err);
            return res.status(500).json({ success: false });
        }
        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`🚀 Forex Calculator App uruchomiona na http://localhost:${port}`);
});