# Print Service API 1.0.0

Allows you to interact with printers. Using it you can:
* Create a print job
* Receive events on the print job

# Servers

## Production

Production server.

Parameter|Value
---------|------
URL|[https://api.print.example.com](https://api.print.example.com)
Protocol|AMQP 0-9-1

### Security

Scheme|Scopes
------|------
[OAuth 2](#oauth-2)|read:user<br />write:user

## Staging

Staging server.

Parameter|Value
---------|------
URL|[mqtt://staging.api.print.example.com:{port}](mqtt://staging.api.print.example.com:{port})
Protocol|MQTT v3.1.1

### Variables

Variable|Allowed|Default|Description
--------|-------|-------|-----------
port|1883<br />8883|1883|Secure connection (TLS) is available through port 8883.<br />Examples:<br />- mqtt://staging.api.print.example.com<br />- mqtt://staging.api.print.example.com:1883<br />- mqtt://staging.api.print.example.com:8883

### Security

Scheme|Scopes
------|------
[API Key](#api-key)|

### Server Bindings

MQTT

Parameter|Value
---------|-----
Client Id|guest
Persistent connection|false
Last Will and Testament topic|/last-wills
Last Will and Testament QoS|2
Retain Last Will and Testament messages|false
Keep-Alive Interval in seconds|60
Binding Version|0.1.0

# Channels

## commands/{queueId}

The topic on which commands can be sent to a print queue.

Parameter|Location|Description
---------|--------|-----------
queueId||The identifier of the print queue.

***queueId***

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|string||||

### Messages

Operation|Name|Description
---------|----|-----------
*publish*|[createPrintJob](#createprintjob)|Creates a print job.
*publish*|[cancelPrintJob](#cancelprintjob)|Cancels a print job.

### As Publisher

Sends commands to a print queue.

Available commands:
* Create a print job
* Cancel a print job

Print Queue Commands Documentation.  
[https://www.example.com/docs/api/queues/commands](https://www.example.com/docs/api/queues/commands)

**Operation Id:** printQueueCommand

## events/{jobId}

The queue on which print job events can be consumed.

Parameter|Location|Description
---------|--------|-----------
jobId||The identifier of the print job.

***jobId***

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|string||||

### Channel Bindings

AMQP

Queue

Parameter|Value
---------|-----
Name|events/jobs
Durable|true
Exclusive|false
AutoDelete|false
Virtual Host|/
Binding Version|0.1.0

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[printJobEvent](#printjobevent)|Print job event.

### As Subscriber

Consumes print job events.

Available events:
* Print job created
* Print job started
* Print job finished
* Print job canceled

Print Job Events Documentation.  
[https://www.example.com/docs/api/jobs/events](https://www.example.com/docs/api/jobs/events)

**Operation Id:** printJobEvent

#### Operation Bindings

AMQP

Parameter|Value
---------|-----
TTL|60
User Id|guest
CC|user.log,support.log
Priority|10
Delivery mode|2
Mandatory|false
BCC|external.audit
Reply To|user.reply
Timestamp|true
ACK|true
Binding Version|0.1.0

#### Operation Tags

##### event

Print job event.  
[https://www.example.com/docs/api/jobs/events](https://www.example.com/docs/api/jobs/events)

##### queue

Print queue.  
[https://www.example.com/docs/api/queues](https://www.example.com/docs/api/queues)

# Messages

## createPrintJob

Creates a print job.

Use this message to create a print job.

The job Id can be used to get the status of the job or cancel it.

Print Jobs Documentation.  
[https://www.example.com/docs/api/jobs](https://www.example.com/docs/api/jobs)

### Payload

**Content Type:** *application/json* 

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
jobId|string||||Job Id.
userId|string||||User Id.
documentName|string||||Document name.<br />**deprecated**
priority|string||low<br />medium<br />high||Priority.

#### Examples

```json
{
  "jobId": "1",
  "userId": "2",
  "documentName": "Document",
  "priority": "low"
}
```

### Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
x-api-key|string||||API Key.
x-correlation-id|string||||Correlation ID.

### Correlation ID

Location|Description
--------|------------
*$message.header#/x-correlation-id*|Identifier used for message tracing and correlation.

## cancelPrintJob

Cancels a print job.

### Payload

**Content Type:** *application/json* 

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
jobId|string||||Job Id.<br />**required**
force|boolean|||false|Force cancellation.

#### Examples

```json
{
  "jobId": "1",
  "force": true
}
```

### Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
x-api-key|string||||API Key.
x-correlation-id|string||||Correlation ID.

### Correlation ID

Location|Description
--------|------------
*$message.header#/x-correlation-id*|Identifier used for message tracing and correlation.

### Message Bindings

AMQP

Parameter|Value
---------|-----
Content Encoding|gzip
Message Type|job.create
Binding Version|0.1.0

### Message Tags

#### job

Print job.  
[https://www.example.com/docs/api/jobs](https://www.example.com/docs/api/jobs)

## printJobEvent

Print job event.

### Payload

**Content Type:** *application/json* 

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
jobId|string||||Job Id.
status|string||created<br />started<br />finished<br />canceled||Status.

#### Examples

```json
{
  "jobId": "1",
  "status": "started"
}
```

# Security

## API Key

Provide your API key as the user and leave the password empty.

Parameter|Value
---------|-----
Security scheme|API Key
Location of the API key|user

## OAuth 2

OAuth 2.0.

Parameter|Value
---------|-----
Security scheme|OAuth 2.0

### OAuth Implicit Flow

Parameter|Value
---------|-----
Authorization URL|[https://auth.example.com/oauth](https://auth.example.com/oauth)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

#### Scopes

Scope|Description
-----|-----------
read:job|Read print jobs.
write:job|Write print jobs.

# Tags

## asyncapi

The industry standard for defining asynchronous APIs.

AsyncAPI specification 2.0.0  
[https://www.asyncapi.com/docs/specifications/2.0.0](https://www.asyncapi.com/docs/specifications/2.0.0)

# License

Apache 2.0  
[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

# Terms Of Service

[http://www.example.com/terms](http://www.example.com/terms)

# Contact

API Support  
[https://www.example.com/support](https://www.example.com/support)  
[support@example.com](mailto:support@example.com)  

---

**Schema Id:** *urn:com:example:print:api*

*AsyncAPI* *2.0.0*
