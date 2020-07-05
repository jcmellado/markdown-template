# Print Service API 1.0.0

Allows you to interact with printers. Using it you can:
* Create a print job
* Receive events on the print job

## Table of Contents

* [1. Servers](#1.-servers)
    * [1.1. Production](#1.1.-production)
    * [1.2. Staging](#1.2.-staging)
* [2. Channels](#2.-channels)
    * [2.1. commands/{queueId}](#2.1.-commands/{queueid})
    * [2.2. events/{jobId}](#2.2.-events/{jobid})
* [3. Messages](#3.-messages)
    * [3.1. createPrintJob](#3.1.-createprintjob)
    * [3.2. cancelPrintJob](#3.2.-cancelprintjob)
    * [3.3. printJobEvent](#3.3.-printjobevent)
* [4. Security](#4.-security)
    * [4.1. API Key](#4.1.-api-key)
    * [4.2. OAuth 2](#4.2.-oauth-2)
* [5. Tags](#5.-tags)
    * [5.1. asyncapi](#5.1.-asyncapi)
* [6. License](#6.-license)
* [7. Terms Of Service](#7.-terms-of-service)
* [8. Contact](#8.-contact)

# 1. Servers

## 1.1. Production

Production server.

Parameter|Value
---------|------
URL|[https://api.print.example.com](https://api.print.example.com)
Protocol|`AMQP` `0-9-1`

### 1.1.1. Security

Scheme|Scopes
------|------
[OAuth 2](#4.2.-oauth-2)|`read:user`<br />`write:user`

## 1.2. Staging

Staging server.

Parameter|Value
---------|------
URL|[mqtt://staging.api.print.example.com:{port}](mqtt://staging.api.print.example.com:{port})
Protocol|`MQTT` `v3.1.1`

### 1.2.1. Server URL Variables

Variable|Allowed|Default|Description
--------|-------|-------|-----------
`port`|`1883`<br />`8883`|`1883`|Secure connection (TLS) is available through port 8883.<br />Examples:<br />- mqtt://staging.api.print.example.com<br />- mqtt://staging.api.print.example.com:1883<br />- mqtt://staging.api.print.example.com:8883

### 1.2.2. Security

Scheme|Scopes
------|------
[API Key](#4.1.-api-key)|

### 1.2.3. Bindings

MQTT

Parameter|Value|Description
---------|-----|-----------
Client Id|`guest`|The client identifier.
Clean session|`false`|Whether to create a persistent connection or not.
Last Will and Testament topic|`/last-wills`|The topic where the Last Will and Testament message will be sent.
Last Will and Testament QoS|`2`|Defines how hard the broker/client will try to ensure that the Last Will and Testament message is received.
Retain Last Will and Testament message|`false`|Whether the broker should retain the Last Will and Testament message or not.
Keep-Alive|`60`|Interval in seconds of the longest period of time the broker and the client can endure without sending a message.
Binding Version|`0.1.0`|The version of this binding.

# 2. Channels

## 2.1. commands/{queueId}

The topic on which commands can be sent to a print queue.

### 2.1.1. Parameters

Parameter|Location|Description
---------|--------|-----------
`queueId`||The identifier of the print queue.

***queueId***

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`string`||||

### 2.1.2. Messages

Operation|Message|Description
---------|-------|-----------
*publish*|[createPrintJob](#3.1.-createprintjob)|Creates a print job.
*publish*|[cancelPrintJob](#3.2.-cancelprintjob)|Cancels a print job.

### 2.1.3. As Publisher

Sends commands to a print queue.

Available commands:
* Create a print job
* Cancel a print job

Print Queue Commands Documentation.  
[https://www.example.com/docs/api/queues/commands](https://www.example.com/docs/api/queues/commands)

**Operation Id:** printQueueCommand

## 2.2. events/{jobId}

The queue on which print job events can be consumed.

### 2.2.1. Parameters

Parameter|Location|Description
---------|--------|-----------
`jobId`||The identifier of the print job.

***jobId***

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`string`||||

### 2.2.2. Bindings

AMQP

Queue

Parameter|Value|Description
---------|-----|-----------
Name|`events/jobs`|The name of the queue.
Durable|`true`|Whether the queue should survive broker restarts or not.
Exclusive|`false`|Whether the queue should be used only by one connection or not.
AutoDelete|`false`|Whether the queue should be deleted when the last consumer unsubscribes.
Virtual Host|`/`|The virtual host of the queue.
Binding Version|`0.1.0`|The version of this binding.

### 2.2.3. Messages

Operation|Message|Description
---------|-------|-----------
*subscribe*|[printJobEvent](#3.3.-printjobevent)|Print job event.

### 2.2.4. As Subscriber

Consumes print job events.

Available events:
* Print job created
* Print job started
* Print job finished
* Print job canceled

Print Job Events Documentation.  
[https://www.example.com/docs/api/jobs/events](https://www.example.com/docs/api/jobs/events)

**Operation Id:** printJobEvent

#### 2.2.4.1. Bindings

AMQP

Parameter|Value|Description
---------|-----|-----------
TTL|`60`|TTL (Time-To-Live) for the message.
User Id|`guest`|Identifies the user who has sent the message.
CC|`user.log,support.log`|The routing keys the message should be routed to at the time of publishing.
Priority|`10`|A priority for the message.
Delivery mode|`2`|Delivery mode of the message.
Mandatory|`false`|Whether the message is mandatory or not.
BCC|`external.audit`|Like CC but consumers will not receive this information.
Reply To|`user.reply`|Name of the queue where the consumer should send the response.
Timestamp|`true`|Whether the message should include a timestamp or not.
ACK|`true`|Whether the consumer should ack the message or not.
Binding Version|`0.1.0`|The version of this binding.

#### 2.2.4.2. Tags

##### 2.2.4.2.1. event

Print job event.  
[https://www.example.com/docs/api/jobs/events](https://www.example.com/docs/api/jobs/events)

##### 2.2.4.2.2. queue

Print queue.  
[https://www.example.com/docs/api/queues](https://www.example.com/docs/api/queues)

# 3. Messages

## 3.1. createPrintJob

Creates a print job.

Use this message to create a print job.

The job Id can be used to get the status of the job or cancel it.

Print Jobs Documentation.  
[https://www.example.com/docs/api/jobs](https://www.example.com/docs/api/jobs)

### 3.1.1. Payload

Content Type: `application/json`

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`jobId`|`string`||||Job Id.
`userId`|`string`||||User Id.
`documentName`|`string`||||Document name.<br />**deprecated**
`priority`|`string`||`low`<br />`medium`<br />`high`||Priority.

#### Examples

```json
{
  "jobId": "1",
  "userId": "2",
  "documentName": "Document",
  "priority": "low"
}
```

### 3.1.2. Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`x-api-key`|`string`||||API Key.
`x-correlation-id`|`string`||||Correlation ID.

### 3.1.3. Correlation ID

Location|Description
--------|------------
`$message.header#/x-correlation-id`|Identifier used for message tracing and correlation.

## 3.2. cancelPrintJob

Cancels a print job.

### 3.2.1. Payload

Content Type: `application/json`

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`jobId`|`string`||||Job Id.<br />**required**
`force`|`boolean`|||`false`|Force cancellation.

#### Examples

```json
{
  "jobId": "1",
  "force": true
}
```

### 3.2.2. Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`x-api-key`|`string`||||API Key.
`x-correlation-id`|`string`||||Correlation ID.

### 3.2.3. Correlation ID

Location|Description
--------|------------
`$message.header#/x-correlation-id`|Identifier used for message tracing and correlation.

### 3.2.4. Bindings

AMQP

Parameter|Value|Description
---------|-----|-----------
Content Encoding|`gzip`|A MIME encoding for the message content.
Message Type|`job.create`|Application-specific message type.
Binding Version|`0.1.0`|The version of this binding.

### 3.2.5. Tags

#### 3.2.5.1. job

Print job.  
[https://www.example.com/docs/api/jobs](https://www.example.com/docs/api/jobs)

## 3.3. printJobEvent

Print job event.

### 3.3.1. Payload

Content Type: `application/json`

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`jobId`|`string`||||Job Id.
`status`|`string`||`created`<br />`started`<br />`finished`<br />`canceled`||Status.

#### Examples

```json
{
  "jobId": "1",
  "status": "started"
}
```

# 4. Security

## 4.1. API Key

Provide your API key as the user and leave the password empty.

Parameter|Value
---------|-----
Security scheme|`API Key`
Location of the API key|`user`

## 4.2. OAuth 2

OAuth 2.0.

Parameter|Value
---------|-----
Security scheme|`OAuth 2.0`

### 4.2.1. OAuth Implicit Flow

Parameter|Value
---------|-----
Authorization URL|[https://auth.example.com/oauth](https://auth.example.com/oauth)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

Scopes

Scope|Description
-----|-----------
`read:job`|Read print jobs.
`write:job`|Write print jobs.

# 5. Tags

## 5.1. asyncapi

The industry standard for defining asynchronous APIs.

AsyncAPI specification 2.0.0  
[https://www.asyncapi.com/docs/specifications/2.0.0](https://www.asyncapi.com/docs/specifications/2.0.0)

# 6. License

Apache 2.0  
[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

# 7. Terms Of Service

[http://www.example.com/terms](http://www.example.com/terms)

# 8. Contact

API Support  
[https://www.example.com/support](https://www.example.com/support)  
[support@example.com](mailto:support@example.com)  

---

**Schema Id:** urn:com:example:print:api

*AsyncAPI* *2.0.0*
