# Host Search Parameters

The API has endpoints for querying our data in which you can use free text search together with one or more of the filters listed below.

**NOTE** : Although free text search without specifying fields is available, it is processed differently from searching on specific fields. For better results, always specify search fields.


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

### as_name: (string)
Search by AS name. 

    e.g. as_name:amazon

### tag: (string)
Search by tags. Can be ICS, MALWARE, DATABASE, WEBSERVER, IOT, CAMERA. Tag list and matches are constantly being updated.

    e.g. tag:IOT

#### Available tags

* BUSYBOX
* CAMERA
* DATABASE
* DEVICES
* GAMES
* ICS
* IOT
* SHELL
* WEBCAM
* WEBSERVER

### has_screenshot: (boolean) 
Search for screenshots, true or false (VNC, RDP or X11 module types only). 

    e.g. has_screenshot:true

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

### device: (string)
Search by device type.

    e.g. device:webcam

### extrainfo: (string)
Search by extra info (can include information such as build, extensions, OS, etc).

    e.g. extrainfo:"PHP/5.4.19"

### ostype: (string)
Search by OS type.

    e.g. ostype:Windows

### banner: (string) 
Search by banner.
    
    e.g. banner:admin

## VNC

### auth_enabled: (boolean)
Search by whether VNC has auth enabled or not:

    e.g. vnc.auth_enabled:false

### height: (int)
Search by VNC height:

    e.g. vnc.height:768

### title: (string)
Search by VNC title:

    e.g. vnc.title:android

### version: (string)
Search by VNC version:

    e.g. vnc.version:"3.8"

### width: (int)
Search by VNC width:

    e.g. vnc.width:1024

## RDP

### security: (string)
Search by RDP security detected.

    e.g. rdp.security:NLA


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

### cyphers: (string)
Search by SSH cyphers.

    e.g. ssh.cyphers:"ssh-rsa"


## SSL

### issuer_names: (string)
Search by Certificate Issuer Name.

    e.g. ssl.cert_info_summary.issuer_names:symantec

### subject_dns: (string)
Search by Certificate Subject DNS.

    e.g. ssl.cert_info_summary.subject_dns:facebook

### subject_names: (string)
Search by Certificate Subject Name.

    e.g. ssl.cert_info_summary.subject_names:facebook

### ciphers: (string)
Search by ciphers.

    e.g. ssl.ciphers:TLSV1_2

### client_auth_requirement_string: (string)
Search by whether the client requires auth or not.

    e.g. ssl.server_info.client_auth_requirement_string:"DISABLED"

### highest_ssl_version_supported: (string)
Search by highest SSL version supported.

    e.g. ssl.server_info.highest_ssl_version_supported_string:TLSV1

### ssl_cipher_supported: (string)
Search by SSL cypher supported.

    e.g. ssl.server_info.ssl_cipher_supported:"AES256-SHA"

### tls_wrapped_protocol_string: (string)
Search by TLS protocol string.

    e.g. ssl.server_info.tls_wrapped_protocol_string:"PLAIN_TLS"

### truststores: (string)
Search by SSL truststores.

    e.g. ssl.truststores:mozilla

### compression_name: (string)
Search for Compression name.

    e.g. ssl.vulnerabilities.compression.compression_name:zlib

### supports_compression: (boolean)
Search for Compression support.

    e.g. ssl.vulnerabilities.compression.supports_compression:true

### supports_fallback_scsv: (boolean)
Search for Fallback SCSV support.

    e.g. ssl.vulnerabilities.fallback.supports_fallback_scsv:true

### is_vulnerable_to_heartbleed: (boolean)
Search for Heartbleed.

    e.g. ssl.vulnerabilities.heartbleed.is_vulnerable_to_heartbleed:true

### is_vulnerable_to_ccs_injection: (boolean)
Search for OpenSSL CCS injection.

    e.g. ssl.vulnerabilities.openssl_ccs.is_vulnerable_to_ccs_injection:true

### accepts_client_renegotiation: (boolean)
Search for Renegotiation support.

    e.g. ssl.vulnerabilities.renegotiation.accepts_client_renegotiation:true

### supports_secure_renegotiation: (boolean)
Search for Secure Renegotiation support.

    e.g. ssl.vulnerabilities.renegotiation.supports_secure_renegotiation:true


## HTTP

### href: (string)
Search by HTTP href.

    e.g. http.href:amazonaws

### httpVersion: (string)
Search by HTTP version.

    e.g. http.httpVersion:"1.1"

### redirects: (string)
Search by HTTP redirects.

    e.g. http.redirects:https

### responseHeaders: (string)
Search by HTTP response headers.

    e.g. http.responseHeaders:google

### server: (string)
Search by HTTP Server header.

    e.g. http.server:apache

### sha256: (string)
Search by SHA256 hash of the body.

    e.g. http.sha256:"066fe13daa5b3416bece7fe09dbf718135908c61f967627a097c3119af0dfa05"

### statusCode: (int)
Search by HTTP status code.

    e.g. http.statusCode:200

### statusMessage: (string)
Search by HTTP status message.

    e.g. http.statusMessage:ok

### title: (string)
Search by HTTP title.

    e.g. http.title:amazon


## MongoDB

#### Available search fields

* mongodb.ismaster (boolean)
* mongodb.listDatabases (string)
* mongodb.names (string)
* mongodb.readonly (boolean)
* mongodb.serverInfo (string)
* mongodb.totalSize (int)
* mongodb.version (string		


## ElasticSearch

#### Available search fields

* elasticsearch.build (string)
* elasticsearch.build_flavor (string)
* elasticsearch.build_hash (string)
* elasticsearch.build_type (string)
* elasticsearch.cluster_name (string)
* elasticsearch.cluster_nodes (int)
* elasticsearch.docs (int)
* elasticsearch.hostname (string)
* elasticsearch.indices (string)
* elasticsearch.indices_raw (string)
* elasticsearch.jvm.version (string)
* elasticsearch.jvm.vm_name (string)
* elasticsearch.jvm.vm_vendor (string)
* elasticsearch.jvm.vm_version (string)
* elasticsearch.modules (string)
* elasticsearch.name (string)
* elasticsearch.node_name (string)
* elasticsearch.os.arch (string)
* elasticsearch.os.cpu.model (string)
* elasticsearch.os.cpu.vendor (string)
* elasticsearch.os.name (string)
* elasticsearch.os.pretty_name (string)
* elasticsearch.os.version (string)
* elasticsearch.ostype (string)
* elasticsearch.plugins (string)
* elasticsearch.roles (string)
* elasticsearch.settings (string)
* elasticsearch.size_in_bytes (int)
* elasticsearch.total_indexing_buffer (int)
* elasticsearch.version (string)


## Redis

#### Available search fields

* redis.aof_base_size (string)
* redis.aof_current_size (string)
* redis.aof_enabled (int)
* redis.arch_bits (int)
* redis.atomicvar_api (string)
* redis.auth_not_required (string)
* redis.cluster_enabled (string)
* redis.connected_slaves (int)
* redis.databases (string)
* redis.dbs (int)
* redis.keys (int)
* redis.maxmemory (string)
* redis.maxmemory_human (string)
* redis.maxmemory_policy (string)
* redis.multiplexing_api (string)
* redis.nodecount (string)
* redis.os (string)
* redis.redis_build_id (string)
* redis.redis_mode (string)
* redis.redis_version (string)
* redis.repl_backlog_size (string)
* redis.repl_sync_enabled (string)
* redis.role (string)
* redis.ssl_enabled (string)
* redis.ssl_protocols (string)
* redis.stats (string)
* redis.uptime_in_days (int)
* redis.uptime_in_seconds (int)
* redis.used_memory (int)
* redis.used_memory_dataset (string)
* redis.used_memory_human (string)
* redis.used_memory_lua (int)
* redis.used_memory_lua_human (string)
* redis.used_memory_overhead (string)
* redis.used_memory_peak (int)
* redis.used_memory_peak_human (string)
* redis.used_memory_rss (int)
* redis.used_memory_rss_human (string)
* redis.used_memory_scripts (string)
* redis.used_memory_scripts_human (string)
* redis.used_memory_startup (string)
* redis.versions (int)


## Memcached

#### Available search fields

* memcached.app_impl_used (string)
* memcached.app_version (string)
* memcached.bytes (int)
* memcached.commandargs (string)
* memcached.current_bytes (int)
* memcached.db_count (int)
* memcached.db_size (int)
* memcached.engine_maxbytes (int)
* memcached.free_bytes (int)
* memcached.ibuffer_size (int)
* memcached.local (string)
* memcached.memcached_version (string)
* memcached.num_servers (int)
* memcached.num_suspect_servers (int)
* memcached.peer (string)
* memcached.pointer_size (int)
* memcached.rep_conn_on (string)
* memcached.rep_state (string)
* memcached.replication (string)
* memcached.server (string)
* memcached.tcp_nodelay (string)
* memcached.total_items (int)
* memcached.uptime (int)
* memcached.version (string)


## Notes

**Free Text**: not specifying a field will search on the full records, which can include other information not stated above.

**Conditionals**: the following conditionals are available: NOT, AND, OR. Must be UPPERCASE. You can also use the minus sign (-) as a replacement for the NOT conditional.

**Comparison**: you can use comparison operators on number fields. E.g. _field:>100.

**String fields caveat**: if the string is expected to have spaces, some kind of punctuation in the middle, or special symbols, instead of querying _field:value_ try _field:"value"_. You can also try instead _field.keyword:"value"_. The first one will search for any occurrence of any of the words in _value_, while the second one will search for an exact match of the string.

**Field existence or omission**: you can search for records that have a specific field by using _\_exists\_:field_. Conversely, for records missing a field it would be _NOT \_exists\_:field_.
