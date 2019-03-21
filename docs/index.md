# BinaryEdge’s API Documentation


## About

[BinaryEdge](https://www.binaryedge.io/) is Cybersecurity/Data Science company that focuses its effort on acquiring, analyzing and classifying internet wide data. We have developed a platform - [40fy](https://www.40fy.io/) that allows us and our customers to gather several data points from exposed servers online. 

The API provides access to that scanning platform, for your own usage, along with access to our curated databases so that you can do querying and analytics on our worldwide (constantly updated) collected data.


## Sections

- API Documentation
    - [API V1 - Enterprise Only](api-v1.md "api-v1")
    - [API V2](api-v2.md "api-v2")
    - [Search Parameters]()
        - [Host Search](search.md "search")
        - [Image Search](image-search.md "image-search")
        - [Sensors Search](sensors-search.md "sensors-search")
        - [Sensors Tags](sensors-tags.md "sensors-tags")
    - [HTTP Status Messages](errors.md "errors")
    - [Event Details]()
        - [Modules](modules.md "modules")
        - [Torrent Data](torrent.md "torrents")
        - [Sinkhole Data](sinkhole.md "sinkhole")

 

## FAQ

**Q: What can I get with 1 credit?**

**A:** 1 credit corresponds to one unit of work, such as a single page of a query, a result for a single IP address, etc. In the case of an API endpoint that allows for CIDRs (paid subscriptions only), 1 credit corresponds to each target that was found, so if you request a /24 (256 targets) and only 200 have results, then 200 credits will be taken from your subscription.


**Q: How to get support?**

**A:** Send an email to support@binaryedge.io describing your issue/question.


**Q: Is there a Slack Community?**

You can sign up for our Slack Community where we are hoping to bring together the community that uses internet scanning data and give you support using our new platform.

* Request Invite: [https://publicslack.com/slacks/40fyio/invites/new](https://publicslack.com/slacks/40fyio/invites/new)
* Slack Community: [https://40fyio.slack.com](https://40fyio.slack.com)


**Q: Why can’t I see information about IP X or Y?**

**A:** There might be several reasons: we might have not detected anything in the ports that we normally scan, our scanners might be blocked on their firewalls, or those IPs might be on our blacklist, in which case we are not scanning them.


**Q: How to be excluded from our scans?**

**A:** Send an email to support@binaryedge.io requesting to be excluded and including your information.


**Q: How to block our scanners?**

**A:** A list of our scanners' IP addresses is available at https://api.binaryedge.io/v1/minions. You can block access from these addresses on your own machines, while keeping in mind that these addresses rotate periodically.


## Related Projects

- [Security Rating](https://securityrating.io/ "Security Rating")
- [Python Lib pybinaryedge](https://pypi.org/project/pybinaryedge/ "python pybinaryedge")
- [R Lib BinaryEdge](https://github.com/balgan/rbinaryedge) "R Package Binaryedge"
- [Maltego Local Transform](https://github.com/Te-k/binaryedge-maltego-local-transform) "Maltego Local Transform
