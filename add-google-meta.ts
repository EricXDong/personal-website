import * as fs from 'fs';
import * as cheerio from 'cheerio';

const $$ = cheerio.load(fs.readFileSync('./build/index.html').toString());
$$('head').append('<meta name="google-site-verification" content="zw9vMhGeipoxTPRY5ltZPt0NgLZCabcqWC0HzPDF8Us" />');
fs.writeFileSync('./build/index.html', $$.html(), {
    encoding: 'utf-8',
});
