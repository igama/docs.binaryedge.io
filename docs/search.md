# Host Search Parameters

The API has endpoints for querying our data in which you can use free text search together with one or more of the following filters:


## General Fields

### ip: (string) 
Search by IP address or CIDR. 

    e.g ip:"192.168.1.1/24" or ip:192.168.1.1

### port: (int) 
Search by port number. 
    
    e.g. port:80

### protocol: (string)
Search by protocol. Can be TCP or UDP. 
    
    e.g. protocol:tcp

### type: (string)
Search by event type. Can be service-simple (the default service identification module), ssl, ssh, vnc, rdp, x11, mongodb, memcached, elasticsearch, redis.

    e.g. type:ssl

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

### tag: (string)
Search by tags. Can be ICS, MALWARE, DATABASE, WEBSERVER, IOT, CAMERA. Tag list and matches are constantly being updated.

    e.g. tag:IOT

Can be:

* WEBSERVER
* DATABASE
* IOT
* DEVICES
* CAMERA
* WEBCAM
* BUSYBOX
* GAMES
* ICS
* SHELL

### created_at: (date)
Search by created_at.

    e.g.
        created_at:[2018-09-01 TO 2018-10-01]
        created_at:2018-09-01


## Service-Simple

### name: (string) 
Search by service names.
    
    e.g. service:http

### product: (string) 
Search by product names. 
    
    e.g. product:nginx

### version: (string) 
Search by product versions. Better used together with product.
    
    e.g. version:1.1.0

### cpe: (string) 
Search by CPE.
    
    e.g. cpe.keyword:"cpe:/a:lighttpd:lighttpd"

### banner: (string) 
Search by banner.
    
    e.g. banner:admin

## VNC, X11, RDP

### has_screenshot: (boolean) 
Search for screenshots, true or false (vnc, rdp or x11 only). 

    e.g. has_screenshot:true


## SSH

### compression: (string)
Search by compression algorithms.

    e.g. ssh.algorithms.compression:zlib

### encryption: (string)
Search by encryption algorithms.

    e.g. ssh.algorithms.encryption.keyword:"aes256-cbc"

### kex: (string)
Search by Key Exchange algorithms.

    e.g. ssh.algorithms.kex.keyword:"diffie-hellman-group-exchange-sha256"

### mac (string)
Search by Message Authentication Code algorithms.

    e.g. ssh.algorithms.mac.keyword:"hmac-sha1"

### server_host_key: (string)
Search by Host key encryption.

    e.g. ssh.algorithms.server_host_key.keyword:"ssh-rsa"

### banner: (string)
Search by banner.

    e.g. ssh.banner.keyword:"SSH-2.0-OpenSSH_LeadSec"


## SSL

### ssl_cipher_supported (string)
Search by SSH cypher supported.

    e.g. ssl.server_info.ssl_cipher_supported:"AES256-SHA"

### highest_ssl_version_supported (string)
Search by highest SSL version supported.

    e.g. ssl.server_info.highest_ssl_version_supported_string:TLSV1

### subject_dns (string)
Search by Certificate Subject DNS.

    e.g. ssl.cert_info_summary.subject_dns:facebook

### subject_names (string)
Search by Certificate Subject Name

    e.g. ssl.cert_info_summary.subject_names:facebook

### issuer_names (string)
Search by Certificate Issuer Name

    e.g. ssl.cert_info_summary.issuer_names:symantec

### supports_fallback_scsv (boolean)
Search for Fallback SCSV support.

    e.g. ssl.vulnerabilities.fallback.supports_fallback_scsv:true

### supports_compression (boolean)
Search for Compression support.

    e.g. ssl.vulnerabilities.compression.supports_compression:true

### is_vulnerable_to_ccs_injection (boolean)
Search for OpenSSL CCS injection.

    e.g. ssl.vulnerabilities.openssl_ccs.is_vulnerable_to_ccs_injection:true

### accepts_client_renegotiation (boolean)
Search for Renegotiation support.

    e.g. ssl.vulnerabilities.renegotiation.accepts_client_renegotiation:true

### supports_secure_renegotiation (boolean)
Search for Secure Renegotiation support.

    e.g. ssl.vulnerabilities.renegotiation.supports_secure_renegotiation:true

### is_vulnerable_to_heartbleed (boolean)
Search for Heartbleed.

    e.g. ssl.vulnerabilities.heartbleed.is_vulnerable_to_heartbleed:true


## Notes

**Free Text**: not specifying a field will search on the full records, which can include other information not stated above.

**Conditionals**: the following conditionals are available: NOT, AND, OR. Must be UPPERCASE. You can also use the minus sign (-) as a replacement for the NOT conditional.

**String fields caveat**: if the string is expected to have spaces or some kind of punctuation in the middle, instead of querying _field:value_ try instead _field.keyword:"value"_. The first one will search for any occurrence of any of the words in _value_, while the second one will search for an exact match of the string.

**Field existence or omission**: you can search for records that have a specific field by using _\_exists\_:field_. Conversely, for records missing a field it would be _NOT \_exists\_:field_.
