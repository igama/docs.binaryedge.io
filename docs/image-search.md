# Image Search Parameters

The API has endpoints for querying our data in which you can use free text search together with one or more of the following filters:

### ip: (string) 
Search by IP address or CIDR. 

    e.g ip:"192.168.1.1/24" or ip:192.168.1.1

### port: (int) 
Search by port number. 
    
    e.g. port:80

### country: (string) 
Search using ISO2 Country Codes. 
    
    e.g. country:ES

### geoip.country_name: (string) 
Search using country names. 
    
    e.g. geoip.country_name:spain

### geoip.city_name: (string) 
Search using city names. 
    
    e.g. geoip.city_name:madrid

### asn: (int)
Search by ASN. 

    e.g. asn:4812

### as_name: (string)
Search by AS name. 

    e.g. as_name:amazon

### tags: (string)
Search by tags. Can be mobile, rdp, vnc, windows, x11.

    e.g. tags:mobile

#### Available tags:

* RDP
* WINDOWS
* VNC
* HAS_FACES
* X11
* MOBILE

### words: (string)
Search by text found by OCR.

    e.g. words:alarm

### has_faces: (boolean)
Search for images with faces detected.

    e.g. has_faces:true

### height: (int)
Search by image height (supports ranges).

    e.g. height:1024

### width: (int)
Search by image width (supports ranges).

    e.g. width:768

### ts: (date)
Search by timestamp.

    e.g.
        ts:[2018-09-01 TO 2018-10-01]
        ts:2018-09-01


## Notes

**Free Text**: not specifying a field will search on the full records, which can include other information not stated above.

**Conditionals**: the following conditionals are available: NOT, AND, OR. Must be UPPERCASE. You can also use the minus sign (-) as a replacement for the NOT conditional.

**Comparison**: you can use comparison operators on number fields. E.g. _field:>100.

**String fields caveat**: if the string is expected to have spaces, some kind of punctuation in the middle, or special symbols, instead of querying _field:value_ try _field:"value"_. You can also try instead _field.keyword:"value"_. The first one will search for any occurrence of any of the words in _value_, while the second one will search for an exact match of the string.

**Field existence or omission**: you can search for records that have a specific field by using _\_exists\_:field_. Conversely, for records missing a field it would be _NOT \_exists\_:field_.
