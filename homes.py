import requests
import os
import xml.etree.ElementTree as ET
import sys, json
os.getenv('PORT', '8080')
os.getenv('IP', '0.0.0.0')
APIKEY = "X1-ZWz18vgk6gjh1n_6zfs6"



if __name__ == '__main__':
    readline= sys.stdin.readlines()
    
    zpids=readline[0]
    url = "http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id="+APIKEY+"&zpid="+ zpids

    myResponse = requests.get(url, verify=True)
    tree = ET.fromstring(myResponse.content)
    # get the address info
    addr=tree.find('response/address')

    i=0
    
    data = {}
    
    for x in addr:
        data[x.tag] = x.text
        addr[i]=x.text
        i=i+1
    info=tree.find('response/editedFacts')
    
    for x in info:
        data[x.tag] = x.text
    
    des=tree.find('response/homeDescription')
    
    try:
        data[des.tag] = des.text
    except Exception as error:
        print("not there")
    json_data = json.dumps(data)
    print json_data





# zpids=["12070368","51780566","51782604","12059087","12070435","12055604"]

# for z  in range(len(zpids)):
        
#     url = "http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id="+APIKEY+"&zpid="+ zpids[z]
#     print(url)
#     myResponse = requests.get(url, verify=True)
    
#     tree = ET.fromstring(myResponse.content)
#     # get the address info
#     addr=tree.find('response/address')
#     print(addr)
#     i=0
    
#     data = {}

#     for x in addr:
#         data[x.tag] = x.text
#         addr[i]=x.text
#         i=i+1
#     info=tree.find('response/editedFacts')
    
#     for x in info:
#         data[x.tag] = x.text
 
#     des=tree.find('response/homeDescription')
#     try:
#         data[des.tag] = des.text
#     except Exception as error:
#         print("not there")
#     json_data = json.dumps(data)
#     print(data)
    
# # get year built,bathrooms,bedrooms, lotsize,finished sqft , 
    
# # for row in tree[2][0][0]:
# #     print(row.tag )
# #     print(row.text)
# #     print('\n')
