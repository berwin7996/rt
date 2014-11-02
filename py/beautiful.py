from bs4 import BeautifulSoup
import requests
import unicodedata
urls = []
imgnames = []
imgurls = []
imgdata = []
for i in range(200):
	url = "www.wikiart.org/en/random"
	r  = requests.get("http://" +url)
	urls.append(r)
	data = r.text
	soup = BeautifulSoup(data)

	results = soup.findAll("img", {"itemprop" : "image"})
	img = results[0]
	imgurl = img['src'][:-9]
	imgname = img['alt']

	imgnames.append(unicodedata.normalize('NFKD', imgname).encode('ascii', 'ignore'))
	imgurls.append(unicodedata.normalize('NFKD', imgurl).encode('ascii', 'ignore'))
	results = soup.findAll("p", {"class" : "pt10 b0"})
	datastr = ''
	for result in results:
		datastr += unicodedata.normalize('NFKD', unicode(result)).encode('ascii', 'ignore')
		datastr += '<p>'
	imgdata.append(datastr)

#print str(imgurls)
urls_out = open('urls.txt', 'wb')
urls_out.write(str(urls))
imgurls_out= open('imgurls.txt', 'wb')
imgurls_out.write(str(imgurls))
imgnames_out = open('imgnames.txt', 'wb')
imgnames_out.write(str(imgnames))
imgdata_out = open('imgdata.txt', 'wb')
imgdata_out.write(str(imgdata))
'''
print urls
print '\n\n'
print imgurls
print '\n\n'
print imgnames
print'\n\n'
print imgdata
'''
print 'success'
