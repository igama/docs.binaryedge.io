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

#### Available tags

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
Search by SSH cypher supported.

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

#### Available search fields:

* mongodb.ismaster (boolean)
* mongodb.listDatabases (string)
* mongodb.names (string)
* mongodb.readonly (boolean)
* mongodb.serverInfo (string)
* mongodb.totalSize (int)
* mongodb.version (string		


## ElasticSearch

#### Available search fields:

* elasticsearch.attributes.attr.rack (string)
* elasticsearch.attributes.aws_availability_zone (string)
* elasticsearch.attributes.awszone (string)
* elasticsearch.attributes.box_type (string)
* elasticsearch.attributes.client (string)
* elasticsearch.attributes.createMerchantId (string)
* elasticsearch.attributes.data (string)
* elasticsearch.attributes.data_center (string)
* elasticsearch.attributes.datacenter (string)
* elasticsearch.attributes.date (string)
* elasticsearch.attributes.dc (string)
* elasticsearch.attributes.di_number (string)
* elasticsearch.attributes.disk_type (string)
* elasticsearch.attributes.disks (string)
* elasticsearch.attributes.fault_domain (string)
* elasticsearch.attributes.function_stale (string)
* elasticsearch.attributes.http.enabled (string)
* elasticsearch.attributes.ingest (string)
* elasticsearch.attributes.ip (string)
* elasticsearch.attributes.itype (string)
* elasticsearch.attributes.job_index (string)
* elasticsearch.attributes.job_name (string)
* elasticsearch.attributes.local (string)
* elasticsearch.attributes.machine_id (string)
* elasticsearch.attributes.master (string)
* elasticsearch.attributes.max_local_storage (string)
* elasticsearch.attributes.max_local_storage_nodes (string)
* elasticsearch.attributes.ml.enabled (string)
* elasticsearch.attributes.ml.machine_memory (string)
* elasticsearch.attributes.ml.max_open_jobs (string)
* elasticsearch.attributes.my_rack (string)
* elasticsearch.attributes.my_rack_id (string)
* elasticsearch.attributes.my_temp (string)
* elasticsearch.attributes.rack (string)
* elasticsearch.attributes.rack_id (string)
* elasticsearch.attributes.region (string)
* elasticsearch.attributes.role (string)
* elasticsearch.attributes.role-incident-indexer (string)
* elasticsearch.attributes.role-text-indexer (string)
* elasticsearch.attributes.set (string)
* elasticsearch.attributes.size (string)
* elasticsearch.attributes.stale (string)
* elasticsearch.attributes.storage (string)
* elasticsearch.attributes.storage-tier (string)
* elasticsearch.attributes.tag (string)
* elasticsearch.attributes.temperature (string)
* elasticsearch.attributes.testattr (string)
* elasticsearch.attributes.type (string)
* elasticsearch.attributes.uid (string)
* elasticsearch.attributes.update_domain (string)
* elasticsearch.attributes.xpack.installed (string)
* elasticsearch.attributes.zone (string)
* elasticsearch.build (string)
* elasticsearch.build_flavor (string)
* elasticsearch.build_hash (string)
* elasticsearch.build_type (string)
* elasticsearch.cluster_name (string)
* elasticsearch.cluster_nodes (int)
* elasticsearch.docs (int)
* elasticsearch.hostname (string)
* elasticsearch.http.max_content_length_in_bytes (int)
* elasticsearch.indices (string)
* elasticsearch.indices_raw (string)
* elasticsearch.ingest.processors.type (string)
* elasticsearch.jvm.version (string)
* elasticsearch.jvm.vm_name (string)
* elasticsearch.jvm.vm_vendor (string)
* elasticsearch.jvm.vm_version (string)
* elasticsearch.modules (string)
* elasticsearch.name (string)
* elasticsearch.network.refresh_interval_in_millis (int)
* elasticsearch.node_name (string)
* elasticsearch.os.allocated_processors (int)
* elasticsearch.os.arch (string)
* elasticsearch.os.available_processors (int)
* elasticsearch.os.cpu.cache_size_in_bytes (int)
* elasticsearch.os.cpu.cores_per_socket (int)
* elasticsearch.os.cpu.mhz (int)
* elasticsearch.os.cpu.model (string)
* elasticsearch.os.cpu.total_cores (int)
* elasticsearch.os.cpu.total_sockets (int)
* elasticsearch.os.cpu.vendor (string)
* elasticsearch.os.mem.total_in_bytes (int)
* elasticsearch.os.name (string)
* elasticsearch.os.pretty_name (string)
* elasticsearch.os.refresh_interval (int)
* elasticsearch.os.swap.total_in_bytes (int)
* elasticsearch.os.version (string)
* elasticsearch.ostype (string)
* elasticsearch.plugins (string)
* elasticsearch.roles (string)
* elasticsearch.settings (string)
* elasticsearch.size_in_bytes (int)
* elasticsearch.total_indexing_buffer (int)
* elasticsearch.version (string)


## Redis

#### Available search fields:

* redis.active_defrag_hits (string)
* redis.active_defrag_key_hits (string)
* redis.active_defrag_key_misses (string)
* redis.active_defrag_misses (string)
* redis.active_defrag_running (string)
* redis.all_client_sent_outstanding (string)
* redis.allocation_stats (string)
* redis.allocator_active (string)
* redis.allocator_allocated (string)
* redis.allocator_frag_bytes (string)
* redis.allocator_frag_ratio (string)
* redis.allocator_resident (string)
* redis.allocator_rss_bytes (string)
* redis.allocator_rss_ratio (string)
* redis.aof_base_size (string)
* redis.aof_buffer_length (string)
* redis.aof_current_rewrite_time_sec (string)
* redis.aof_current_size (string)
* redis.aof_delayed_fsync (string)
* redis.aof_enabled (int)
* redis.aof_last_bgrewrite_status (string)
* redis.aof_last_cow_size (string)
* redis.aof_last_rewrite_start_time (string)
* redis.aof_last_rewrite_time_sec (string)
* redis.aof_last_write_status (string)
* redis.aof_pending_bio_fsync (string)
* redis.aof_pending_rewrite (string)
* redis.aof_rewrite_buffer_length (string)
* redis.aof_rewrite_in_progress (string)
* redis.aof_rewrite_pid (string)
* redis.aof_rewrite_scheduled (string)
* redis.aof_rewrites (string)
* redis.arch_bits (int)
* redis.atomicvar_api (string)
* redis.auth_not_required (string)
* redis.bgrewriteaof_in_progress (string)
* redis.bgrewriteaof_scheduled (string)
* redis.bgsave_in_progress (string)
* redis.bigkeys_status (string)
* redis.blocked_clients (int)
* redis.bytes_received_per_sec (string)
* redis.bytes_received_per_sec_human (string)
* redis.bytes_sent_per_sec (string)
* redis.bytes_sent_per_sec_human (string)
* redis.changes_since_last_save (string)
* redis.child_pid (string)
* redis.clear_key (string)
* redis.client_average_outputbuffer_bytes (string)
* redis.client_biggest_input_buf (int)
* redis.client_biggest_outputbuffer_bytes (string)
* redis.client_longest_output_list (int)
* redis.client_recent_max_input_buffer (string)
* redis.client_recent_max_output_buffer (string)
* redis.client_total_outputbuffer_bytes_outstanding (string)
* redis.client_total_reply_bytes_outstanding (string)
* redis.client_total_reply_bytes_outstanding_global (string)
* redis.client_total_sent_bytes_outstanding (string)
* redis.client_total_writes_outstanding (string)
* redis.cluster_enabled (string)
* redis.config_file (string)
* redis.configured_hz (string)
* redis.connected_clients (int)
* redis.connected_slaves (int)
* redis.databases (string)
* redis.dbs (int)
* redis.ds_enabled (string)
* redis.event_no_wait (string)
* redis.event_no_wait_count (string)
* redis.event_wait (string)
* redis.event_wait_count (string)
* redis.evicted_keys (int)
* redis.evicted_keys_memoryfreed (string)
* redis.evicted_keys_per_sec (string)
* redis.executable (string)
* redis.expired_keys (int)
* redis.expired_stale_perc (string)
* redis.expired_time_cap_reached_count (string)
* redis.free_fd_high (string)
* redis.free_fd_low (string)
* redis.gcc_version (string)
* redis.hash_max_zipmap_entries (string)
* redis.hash_max_zipmap_value (string)
* redis.hit_rate_percentage (string)
* redis.hits_per_sec (string)
* redis.hz (string)
* redis.infra_chunks_zeroed (string)
* redis.infra_file_mappings (string)
* redis.infra_files_segments (string)
* redis.infra_pages_faulted (string)
* redis.infra_pages_forced (string)
* redis.infra_pages_reset (string)
* redis.infra_purge_count (string)
* redis.infra_purge_sizes (string)
* redis.input_limit_tokens (string)
* redis.input_strict_limit (string)
* redis.insert time (string)
* redis.instantaneous_input_kbps (int)
* redis.instantaneous_ops_per_sec (int)
* redis.instantaneous_output_kbps (int)
* redis.keys (int)
* redis.keyspace_hits (int)
* redis.keyspace_misses (int)
* redis.keyspace_read_hits (string)
* redis.keyspace_read_misses (string)
* redis.keyspace_write_hits (string)
* redis.keyspace_write_misses (string)
* redis.last_bgsave_status (string)
* redis.last_busy (string)
* redis.last_non_empty (string)
* redis.last_save_time (string)
* redis.latest_fork_usec (string)
* redis.lazyfree_pending_objects (string)
* redis.loading (string)
* redis.longest_list_seen (string)
* redis.lru_clock (string)
* redis.master_last_io_seconds_ago (string)
* redis.master_link_status (string)
* redis.master_repl_offset (string)
* redis.master_replid (string)
* redis.master_replid2 (string)
* redis.master_sync_in_progress (string)
* redis.maxclients (string)
* redis.maxfragmentationmemory_desired_reservation (string)
* redis.maxfragmentationmemory_reservation (string)
* redis.maxmemory (string)
* redis.maxmemory_cap (string)
* redis.maxmemory_cap_human (string)
* redis.maxmemory_desired_cap (string)
* redis.maxmemory_desired_reservation (string)
* redis.maxmemory_human (string)
* redis.maxmemory_policy (string)
* redis.maxmemory_reservation (string)
* redis.mem_allocator (string)
* redis.mem_aof_buffer (string)
* redis.mem_clients_normal (string)
* redis.mem_clients_slaves (string)
* redis.mem_fragmentation_bytes (string)
* redis.mem_fragmentation_ratio (int)
* redis.mem_not_counted_for_evict (string)
* redis.mem_replication_backlog (string)
* redis.meta time (string)
* redis.migrate_cached_sockets (string)
* redis.min_slaves_good_slaves (string)
* redis.misses_per_sec (string)
* redis.multiplexing_api (string)
* redis.nodecount (string)
* redis.number_of_cached_scripts (string)
* redis.os (string)
* redis.output_limit_tokens (string)
* redis.output_strict_limit (string)
* redis.pacluster_enabled (string)
* redis.pacluster_import_max_rt (string)
* redis.pacluster_import_qps (string)
* redis.pacluster_import_sum_rt (string)
* redis.pacluster_importing_start_time (string)
* redis.pacluster_migrate_max_rt (string)
* redis.pacluster_migrate_qps (string)
* redis.pacluster_migrate_start_time (string)
* redis.pacluster_migrate_sum_rt (string)
* redis.pending_deletes (string)
* redis.process_id (string)
* redis.pubsub_channels (int)
* redis.pubsub_patterns (int)
* redis.rdb_bgsave_in_progress (string)
* redis.rdb_bgsave_pid (string)
* redis.rdb_changes_since_last_save (int)
* redis.rdb_current_bgsave_time_sec (int)
* redis.rdb_last_bgsave_status (string)
* redis.rdb_last_bgsave_time_sec (int)
* redis.rdb_last_bgsave_try_time (string)
* redis.rdb_last_cow_size (string)
* redis.rdb_last_save_time (int)
* redis.rdb_saves (string)
* redis.redis_build_id (string)
* redis.redis_git_dirty (string)
* redis.redis_git_sha1 (string)
* redis.redis_mode (string)
* redis.redis_version (string)
* redis.rejected_connections (int)
* redis.rejected_connections_status (string)
* redis.repl_backlog_active (string)
* redis.repl_backlog_first_byte_offset (string)
* redis.repl_backlog_histlen (int)
* redis.repl_backlog_max_slave_offset_lag (string)
* redis.repl_backlog_size (string)
* redis.repl_sync_enabled (string)
* redis.rlec_version (string)
* redis.role (string)
* redis.rss_overhead_bytes (string)
* redis.rss_overhead_ratio (string)
* redis.run_id (string)
* redis.second_repl_offset (string)
* redis.sentinel_masters (string)
* redis.sentinel_running_scripts (string)
* redis.sentinel_scripts_queue_length (string)
* redis.sentinel_simulate_failure_flags (string)
* redis.sentinel_tilt (string)
* redis.server_id (string)
* redis.server_load (string)
* redis.slave_expires_tracked_keys (string)
* redis.slave_priority (string)
* redis.slave_read_only (string)
* redis.slave_read_reploff (string)
* redis.slave_repl_offset (string)
* redis.sockets_fd_held (string)
* redis.ssl_accept_count (string)
* redis.ssl_client_count (string)
* redis.ssl_connections_to_current_certificate (string)
* redis.ssl_connections_to_previous_certificate (string)
* redis.ssl_current_certificate_not_after_date (string)
* redis.ssl_current_certificate_not_before_date (string)
* redis.ssl_current_certificate_serial (string)
* redis.ssl_enabled (string)
* redis.ssl_protocols (string)
* redis.ssl_reject_count (string)
* redis.stat_avg_rt (string)
* redis.stat_max_rt (string)
* redis.stats (string)
* redis.sync_full (string)
* redis.sync_partial_err (int)
* redis.sync_partial_ok (int)
* redis.total_bigkeys (string)
* redis.total_commands_processed (int)
* redis.total_commands_received (string)
* redis.total_connections_received (int)
* redis.total_movedmessages_readonlynotset (string)
* redis.total_net_input_bytes (int)
* redis.total_net_output_bytes (int)
* redis.total_oom_messages (string)
* redis.total_seredis_connections_received (string)
* redis.total_system_memory (string)
* redis.total_system_memory_human (string)
* redis.traffic_control_input (string)
* redis.traffic_control_input_status (string)
* redis.traffic_control_output (string)
* redis.traffic_control_output_status (string)
* redis.traffic_control_read (string)
* redis.traffic_control_read_status (string)
* redis.traffic_control_write (string)
* redis.traffic_control_write_status (string)
* redis.uptime_in_days (int)
* redis.uptime_in_seconds (int)
* redis.use_tcmalloc (string)
* redis.used_cpu_avg_ms_per_sec (string)
* redis.used_cpu_sys (int)
* redis.used_cpu_sys_children (int)
* redis.used_cpu_sys_childrens (string)
* redis.used_cpu_user (int)
* redis.used_cpu_user_children (int)
* redis.used_cpu_user_childrens (string)
* redis.used_memory (int)
* redis.used_memory_dataset (string)
* redis.used_memory_dataset_perc (string)
* redis.used_memory_human (string)
* redis.used_memory_lua (int)
* redis.used_memory_lua_human (string)
* redis.used_memory_overhead (string)
* redis.used_memory_peak (int)
* redis.used_memory_peak_human (string)
* redis.used_memory_peak_perc (string)
* redis.used_memory_rss (int)
* redis.used_memory_rss_blocks (string)
* redis.used_memory_rss_chunks (string)
* redis.used_memory_rss_human (string)
* redis.used_memory_rss_pages (string)
* redis.used_memory_scripts (string)
* redis.used_memory_scripts_human (string)
* redis.used_memory_startup (string)
* redis.versions (int)
* redis.vm_conf_max_memory (string)
* redis.vm_conf_page_size (string)
* redis.vm_conf_pages (string)
* redis.vm_enabled (string)
* redis.vm_stats_blocked_clients (string)
* redis.vm_stats_io_active_threads (string)
* redis.vm_stats_io_newjobs_len (string)
* redis.vm_stats_io_processed_len (string)
* redis.vm_stats_io_processing_len (string)
* redis.vm_stats_swapped_objects (string)
* redis.vm_stats_swappin_count (string)
* redis.vm_stats_swappout_count (string)
* redis.vm_stats_used_pages (string)
* redis.zombie_sockets (string)
* redis.zombie_sockets_max (string)
* redis.zombie_sockets_total (string)


## Memcached

#### Available search fields:

* memcached.accepting_conns (int)
* memcached.app_impl_used (string)
* memcached.app_version (string)
* memcached.asynclog_requests (int)
* memcached.auth_cmds (int)
* memcached.auth_errors (int)
* memcached.bop_count_hits (int)
* memcached.bop_count_misses (int)
* memcached.bop_create_oks (int)
* memcached.bop_decr_elem_hits (int)
* memcached.bop_decr_misses (int)
* memcached.bop_decr_none_hits (int)
* memcached.bop_delete_elem_hits (int)
* memcached.bop_delete_misses (int)
* memcached.bop_delete_none_hits (int)
* memcached.bop_gbp_elem_hits (int)
* memcached.bop_gbp_misses (int)
* memcached.bop_gbp_none_hits (int)
* memcached.bop_get_elem_hits (int)
* memcached.bop_get_misses (int)
* memcached.bop_get_none_hits (int)
* memcached.bop_incr_elem_hits (int)
* memcached.bop_incr_misses (int)
* memcached.bop_incr_none_hits (int)
* memcached.bop_insert_hits (int)
* memcached.bop_insert_misses (int)
* memcached.bop_mget_oks (int)
* memcached.bop_position_elem_hits (int)
* memcached.bop_position_misses (int)
* memcached.bop_position_none_hits (int)
* memcached.bop_pwg_elem_hits (int)
* memcached.bop_pwg_misses (int)
* memcached.bop_pwg_none_hits (int)
* memcached.bop_smget_oks (int)
* memcached.bop_update_elem_hits (int)
* memcached.bop_update_misses (int)
* memcached.bop_update_none_hits (int)
* memcached.bucket_active_conns (int)
* memcached.bucket_conns (int)
* memcached.bytes (int)
* memcached.bytes_read (int)
* memcached.bytes_subdoc_lookup_extracted (int)
* memcached.bytes_subdoc_lookup_total (int)
* memcached.bytes_subdoc_mutation_inserted (int)
* memcached.bytes_subdoc_mutation_total (int)
* memcached.bytes_written (int)
* memcached.cas_badval (int)
* memcached.cas_hits (int)
* memcached.cas_misses (int)
* memcached.client_queue_notify_period (int)
* memcached.cmd_bop_count (int)
* memcached.cmd_bop_create (int)
* memcached.cmd_bop_decr (int)
* memcached.cmd_bop_delete (int)
* memcached.cmd_bop_gbp (int)
* memcached.cmd_bop_get (int)
* memcached.cmd_bop_incr (int)
* memcached.cmd_bop_insert (int)
* memcached.cmd_bop_mget (int)
* memcached.cmd_bop_position (int)
* memcached.cmd_bop_pwg (int)
* memcached.cmd_bop_smget (int)
* memcached.cmd_bop_update (int)
* memcached.cmd_cas (int)
* memcached.cmd_cas_count (int)
* memcached.cmd_cas_outlier (int)
* memcached.cmd_cas_outlier_all (int)
* memcached.cmd_cas_outlier_all_count (int)
* memcached.cmd_cas_outlier_count (int)
* memcached.cmd_config_get (int)
* memcached.cmd_config_set (int)
* memcached.cmd_decr (int)
* memcached.cmd_delete (int)
* memcached.cmd_delete_count (int)
* memcached.cmd_delete_hits (int)
* memcached.cmd_delete_misses (int)
* memcached.cmd_delete_outlier (int)
* memcached.cmd_delete_outlier_all (int)
* memcached.cmd_delete_outlier_all_count (int)
* memcached.cmd_delete_outlier_count (int)
* memcached.cmd_flush (int)
* memcached.cmd_flush_prefix (int)
* memcached.cmd_get (int)
* memcached.cmd_get_count (int)
* memcached.cmd_get_hits (int)
* memcached.cmd_get_misses (int)
* memcached.cmd_get_outlier (int)
* memcached.cmd_get_outlier_all (int)
* memcached.cmd_get_outlier_all_count (int)
* memcached.cmd_get_outlier_count (int)
* memcached.cmd_getattr (int)
* memcached.cmd_gets (int)
* memcached.cmd_gets_count (int)
* memcached.cmd_gets_outlier (int)
* memcached.cmd_gets_outlier_all (int)
* memcached.cmd_gets_outlier_all_count (int)
* memcached.cmd_gets_outlier_count (int)
* memcached.cmd_incr (int)
* memcached.cmd_lop_create (int)
* memcached.cmd_lop_delete (int)
* memcached.cmd_lop_get (int)
* memcached.cmd_lop_insert (int)
* memcached.cmd_mop_create (int)
* memcached.cmd_mop_delete (int)
* memcached.cmd_mop_get (int)
* memcached.cmd_mop_insert (int)
* memcached.cmd_mop_update (int)
* memcached.cmd_other_outlier (int)
* memcached.cmd_other_outlier_all (int)
* memcached.cmd_other_outlier_all_count (int)
* memcached.cmd_other_outlier_count (int)
* memcached.cmd_set (int)
* memcached.cmd_set_count (int)
* memcached.cmd_set_hits (int)
* memcached.cmd_set_misses (int)
* memcached.cmd_set_outlier (int)
* memcached.cmd_set_outlier_all (int)
* memcached.cmd_set_outlier_all_count (int)
* memcached.cmd_set_outlier_count (int)
* memcached.cmd_setattr (int)
* memcached.cmd_sop_create (int)
* memcached.cmd_sop_delete (int)
* memcached.cmd_sop_exist (int)
* memcached.cmd_sop_get (int)
* memcached.cmd_sop_insert (int)
* memcached.cmd_subdoc_lookup (int)
* memcached.cmd_subdoc_mutation (int)
* memcached.cmd_total_gets (int)
* memcached.cmd_total_ops (int)
* memcached.cmd_total_sets (int)
* memcached.cmd_touch (int)
* memcached.commandargs (string)
* memcached.conn_yields (int)
* memcached.connection_structures (int)
* memcached.crawler_items_checked (int)
* memcached.crawler_reclaimed (int)
* memcached.curr_bytes_snap (int)
* memcached.curr_config (int)
* memcached.curr_connections (int)
* memcached.curr_conns_on_port_11207 (int)
* memcached.curr_conns_on_port_11209 (int)
* memcached.curr_conns_on_port_11210 (int)
* memcached.curr_hash (int)
* memcached.curr_items (int)
* memcached.curr_items_snap (int)
* memcached.curr_prefixes (int)
* memcached.curr_temp_items (int)
* memcached.current_bytes (int)
* memcached.cycles_avg (int)
* memcached.cycles_max (int)
* memcached.cycles_min (int)
* memcached.cycles_num (int)
* memcached.cycles_p01 (int)
* memcached.cycles_p05 (int)
* memcached.cycles_p50 (int)
* memcached.cycles_p95 (int)
* memcached.cycles_p99 (int)
* memcached.daemon_connections (int)
* memcached.db_apow (int)
* memcached.db_bnum (int)
* memcached.db_chksum (int)
* memcached.db_count (int)
* memcached.db_cusage (int)
* memcached.db_dfunit (int)
* memcached.db_first (int)
* memcached.db_flags (int)
* memcached.db_fmtver (int)
* memcached.db_fpow (int)
* memcached.db_frgcnt (int)
* memcached.db_icnt (int)
* memcached.db_ktcapcnt (string)
* memcached.db_ktcapsiz (string)
* memcached.db_ktopts (int)
* memcached.db_last (int)
* memcached.db_lcnt (int)
* memcached.db_librev (int)
* memcached.db_libver (int)
* memcached.db_msiz (int)
* memcached.db_opts (int)
* memcached.db_path (string)
* memcached.db_pccap (int)
* memcached.db_pnum (int)
* memcached.db_psiz (int)
* memcached.db_rcomp (string)
* memcached.db_realsize (int)
* memcached.db_realtype (int)
* memcached.db_recovered (int)
* memcached.db_reorganized (int)
* memcached.db_root (int)
* memcached.db_size (int)
* memcached.db_trimmed (int)
* memcached.db_type (int)
* memcached.deadtime (int)
* memcached.decr_hits (int)
* memcached.decr_misses (int)
* memcached.delete_hits (int)
* memcached.delete_misses (int)
* memcached.destination_batch_size (int)
* memcached.destination_batches_sum (int)
* memcached.destination_inflight_reqs (int)
* memcached.destination_max_inflight_reqs (int)
* memcached.destination_max_pending_reqs (int)
* memcached.destination_pending_reqs (int)
* memcached.destination_requests_sum (int)
* memcached.direct_reclaims (int)
* memcached.duration_us (int)
* memcached.engine_maxbytes (int)
* memcached.ep_access_scanner_last_runtime (int)
* memcached.ep_access_scanner_num_items (int)
* memcached.ep_active_hlc_drift_count (int)
* memcached.ep_bg_fetch_delay (int)
* memcached.ep_chk_period (int)
* memcached.ep_cursor_dropping_lower_threshold (int)
* memcached.ep_cursors_dropped (int)
* memcached.ep_data_traffic_enabled (string)
* memcached.ep_dcp_conn_buffer_size (int)
* memcached.ep_dcp_conn_buffer_size_aggressive_perc (int)
* memcached.ep_dcp_noop_interval (int)
* memcached.ep_defragmenter_num_visited (int)
* memcached.ep_diskqueue_fill (int)
* memcached.ep_exp_pager_stime (int)
* memcached.ep_failpartialwarmup (string)
* memcached.ep_flushall_enabled (string)
* memcached.ep_getl_max_timeout (int)
* memcached.ep_initfile (string)
* memcached.ep_io_compaction_write_bytes (int)
* memcached.ep_item_begin_failed (int)
* memcached.ep_max_num_nonio (int)
* memcached.ep_max_num_workers (int)
* memcached.ep_max_size (int)
* memcached.ep_mem_high_wat (int)
* memcached.ep_mutation_mem_threshold (int)
* memcached.ep_num_eject_failures (int)
* memcached.ep_num_ops_get_meta_on_set_meta (int)
* memcached.ep_num_ops_set_meta_res_fail (int)
* memcached.ep_num_pager_runs (int)
* memcached.ep_overhead (int)
* memcached.ep_pending_ops_max (int)
* memcached.ep_pending_ops_total (int)
* memcached.ep_replica_hlc_drift_count (int)
* memcached.ep_rollback_count (int)
* memcached.ep_storedval_overhead (int)
* memcached.ep_tap_ack_initial_sequence_number (int)
* memcached.ep_value_size (int)
* memcached.ep_warmup_thread (string)
* memcached.evicted (int)
* memcached.evicted_active (int)
* memcached.evicted_unfetched (int)
* memcached.evictions (int)
* memcached.expired (int)
* memcached.expired_unfetched (int)
* memcached.fibers_allocated (int)
* memcached.fibers_pool_size (int)
* memcached.fibers_stack_high_watermark (int)
* memcached.free_bytes (int)
* memcached.gc_calls (int)
* memcached.get_expired (int)
* memcached.get_flushed (int)
* memcached.get_hits (int)
* memcached.get_misses (int)
* memcached.getattr_hits (int)
* memcached.getattr_misses (int)
* memcached.hash_bytes (int)
* memcached.hash_is_expanding (int)
* memcached.hash_power_level (int)
* memcached.hb_count (int)
* memcached.hb_failstop (int)
* memcached.hb_latency (int)
* memcached.hb_timeout (int)
* memcached.ibuffer_size (int)
* memcached.id (string)
* memcached.incr_hits (int)
* memcached.incr_misses (int)
* memcached.iovused_high_watermark (int)
* memcached.launch_time_maxbytes (int)
* memcached.libevent (string)
* memcached.limit_maxbytes (int)
* memcached.listen_disabled_num (int)
* memcached.local (string)
* memcached.log_watcher_sent (int)
* memcached.log_watcher_skipped (int)
* memcached.log_worker_dropped (int)
* memcached.log_worker_written (int)
* memcached.lop_create_oks (int)
* memcached.lop_delete_elem_hits (int)
* memcached.lop_delete_misses (int)
* memcached.lop_delete_none_hits (int)
* memcached.lop_get_elem_hits (int)
* memcached.lop_get_misses (int)
* memcached.lop_get_none_hits (int)
* memcached.lop_insert_hits (int)
* memcached.lop_insert_misses (int)
* memcached.lru_bumps_dropped (int)
* memcached.lru_crawler_running (int)
* memcached.lru_crawler_starts (int)
* memcached.lru_maintainer_juggles (int)
* memcached.lrutail_reflocked (int)
* memcached.malloc_fails (int)
* memcached.max_connections (int)
* memcached.max_conns_on_port_11207 (int)
* memcached.max_conns_on_port_11209 (int)
* memcached.max_conns_on_port_11210 (int)
* memcached.mcc_txbuf_reqs (int)
* memcached.mcc_waiting_replies (int)
* memcached.mem_percent_used (int)
* memcached.memcached_version (string)
* memcached.mop_create_oks (int)
* memcached.mop_delete_elem_hits (int)
* memcached.mop_delete_misses (int)
* memcached.mop_delete_none_hits (int)
* memcached.mop_get_elem_hits (int)
* memcached.mop_get_misses (int)
* memcached.mop_get_none_hits (int)
* memcached.mop_insert_hits (int)
* memcached.mop_insert_misses (int)
* memcached.mop_update_elem_hits (int)
* memcached.mop_update_misses (int)
* memcached.mop_update_none_hits (int)
* memcached.moves_to_cold (int)
* memcached.moves_to_warm (int)
* memcached.moves_within_lru (int)
* memcached.msgused_high_watermark (int)
* memcached.num_clients (int)
* memcached.num_servers (int)
* memcached.num_servers_closed (int)
* memcached.num_servers_down (int)
* memcached.num_servers_new (int)
* memcached.num_servers_up (int)
* memcached.num_suspect_servers (int)
* memcached.outofmemorys (int)
* memcached.outstanding_route_get_avg_queue_size (int)
* memcached.outstanding_route_get_avg_wait_time_sec (int)
* memcached.outstanding_route_get_reqs_queued (int)
* memcached.outstanding_route_update_avg_queue_size (int)
* memcached.outstanding_route_update_avg_wait_time_sec (int)
* memcached.outstanding_route_update_reqs_queued (int)
* memcached.parent_pid (int)
* memcached.peer (string)
* memcached.pid (int)
* memcached.pointer_size (int)
* memcached.proxy_reqs_processing (int)
* memcached.proxy_reqs_waiting (int)
* memcached.ps_num_major_faults (int)
* memcached.ps_num_minor_faults (int)
* memcached.ps_rss (int)
* memcached.ps_system_time_sec (string)
* memcached.ps_user_time_sec (string)
* memcached.ps_vsize (int)
* memcached.quit_connections (int)
* memcached.rbufs_allocated (int)
* memcached.rbufs_existing (int)
* memcached.rbufs_loaned (int)
* memcached.reclaimed (int)
* memcached.reject_connections (int)
* memcached.rejected_connections (int)
* memcached.rejected_conns (int)
* memcached.rep_conn_on (string)
* memcached.rep_state (string)
* memcached.repcached_qi_free (int)
* memcached.repcached_version (string)
* memcached.repcached_wdata (int)
* memcached.repcached_wsize (int)
* memcached.replication (string)
* memcached.replication_pos (int)
* memcached.reserved_fds (int)
* memcached.retrans_closed_connections (int)
* memcached.retrans_per_kbyte_max (int)
* memcached.rusage_system (string)
* memcached.rusage_user (string)
* memcached.server (string)
* memcached.set_hits (int)
* memcached.set_misses (int)
* memcached.setattr_hits (int)
* memcached.setattr_misses (int)
* memcached.slab_global_page_pool (int)
* memcached.slab_reassign_busy_deletes (int)
* memcached.slab_reassign_busy_items (int)
* memcached.slab_reassign_chunk_rescues (int)
* memcached.slab_reassign_evictions_nomem (int)
* memcached.slab_reassign_inline_reclaim (int)
* memcached.slab_reassign_rescues (int)
* memcached.slab_reassign_running (int)
* memcached.slabs_moved (int)
* memcached.sop_create_oks (int)
* memcached.sop_delete_elem_hits (int)
* memcached.sop_delete_misses (int)
* memcached.sop_delete_none_hits (int)
* memcached.sop_exist_hits (int)
* memcached.sop_exist_misses (int)
* memcached.sop_get_elem_hits (int)
* memcached.sop_get_misses (int)
* memcached.sop_get_none_hits (int)
* memcached.sop_insert_hits (int)
* memcached.sop_insert_misses (int)
* memcached.stat_prefixes (int)
* memcached.stat_reset (string)
* memcached.sticky_bytes (int)
* memcached.sticky_items (int)
* memcached.sticky_limit (int)
* memcached.successful_client_connections (int)
* memcached.system_load (string)
* memcached.tcp_nodelay (string)
* memcached.threads (int)
* memcached.time (int)
* memcached.time_in_listen_disabled_us (int)
* memcached.total_connections (int)
* memcached.total_items (int)
* memcached.touch_hits (int)
* memcached.touch_misses (int)
* memcached.uptime (int)
* memcached.vb_active_meta_data_memory (int)
* memcached.vb_active_ops_delete (int)
* memcached.vb_active_perc_mem_resident (int)
* memcached.vb_active_rollback_item_count (int)
* memcached.vb_pending_meta_data_memory (int)
* memcached.vb_replica_meta_data_memory (int)
* memcached.vb_replica_num (int)
* memcached.vb_replica_ops_update (int)
* memcached.vb_replica_rollback_item_count (int)
* memcached.version (string)
* memcached.waiting_requests (int)
* memcached.wbufs_allocated (int)
* memcached.wbufs_loaned (int)
* memcached.zk_connected (string)
* memcached.zk_failstop (string)
* memcached.zk_timeout (int)				


## Notes

**Free Text**: not specifying a field will search on the full records, which can include other information not stated above.

**Conditionals**: the following conditionals are available: NOT, AND, OR. Must be UPPERCASE. You can also use the minus sign (-) as a replacement for the NOT conditional.

**Comparison**: you can use comparison operators on number fields. E.g. _field:>100.

**String fields caveat**: if the string is expected to have spaces, some kind of punctuation in the middle, or special symbols, instead of querying _field:value_ try _field:"value"_. You can also try instead _field.keyword:"value"_. The first one will search for any occurrence of any of the words in _value_, while the second one will search for an exact match of the string.

**Field existence or omission**: you can search for records that have a specific field by using _\_exists\_:field_. Conversely, for records missing a field it would be _NOT \_exists\_:field_.
