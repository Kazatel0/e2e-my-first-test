
module.exports = {
	'Click on element 1'(browser) {
    browser
		.url('https://www.spectrum-franek.cz')
		browser.click('.popup-content > r-grid:nth-child(1) > r-cell:nth-child(4) > form:nth-child(1) > button:nth-child(4)')
		browser.click('div.w-full:nth-child(8) > a:nth-child(1)')
		browser.click('r-cell.product:nth-child(1) > div:nth-child(1) > form:nth-child(3) > r-grid:nth-child(1) > r-cell:nth-child(1) > button:nth-child(2)')
		browser.element.find('.popup').assert.visible('.mb-0');
		browser.click('.popup-close')
		browser.click('r-cell.product:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)')
		browser.element.find('input.count:nth-child(2)').setValue('2')
		browser.element.find('button.cart-add:nth-child(1)').click()
		browser.element.find('.popup').assert.visible('.mb-0')
		browser.click('a.primary')
		browser.element.find('r-grid.product-datalayer:nth-child(1) > r-cell:nth-child(4) > form:nth-child(1) > input:nth-child(2)').assert.visible('1')
		browser.element.find('r-grid.product-datalayer:nth-child(2) > r-cell:nth-child(4) > form:nth-child(1) > input:nth-child(2)').assert.visible('2')

  }
}