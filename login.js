web.init()
web.open('https://en.hboespana.com/');
web.selectWindow('title=HBO');
web.click('//*[@id="app"]/div/div[1]/div/div/div[1]/div/div[1]/button')
web.type('id=email', 'sid007.23@gmail.com');
web.type('//input[@type=\'password\']', '******');
web.click('//form[@id=\'geoblock-sign-in\']/div[1]/div/button');
web.click('//img[@alt=\'Series & Movies\']');
