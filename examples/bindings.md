# Bindings 1.0.0

# Servers

## MQTT-Server

Parameter|Value
---------|------
URL|[dummy](dummy)
Protocol|MQTT 

### Server Bindings

MQTT

Parameter|Value
---------|-----
Client Id|guest
Persistent connection|true
Last Will and Testament topic|/last-wills
Last Will and Testament QoS|2
Retain Last Will and Testament messages|false
Keep-Alive Interval in seconds|60
Binding Version|0.1.0

# Channels

## WebSockets-Channel

### Channel Bindings

WebSockets

Parameter|Value
---------|-----
HTTP method|GET
Binding Version|0.1.0

HTTP Query Parameters

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
userId|string||||User Id

HTTP Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
x-apikey|string||||API Key

## AMQP-Channel-RoutingKey

### Channel Bindings

AMQP

Exchange

Parameter|Value
---------|-----
Name|events
Type|topic
Durable|true
AutoDelete|false
Virtual Host|/
Binding Version|0.1.0

## AMQP-Channel-Queue

### Channel Bindings

AMQP

Queue

Parameter|Value
---------|-----
Name|events
Durable|true
Exclusive|false
AutoDelete|false
Virtual Host|/
Binding Version|0.1.0

## HTTP-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[HTTP-Message](#http-message)|

### As Subscriber

#### Operation Bindings

HTTP

Parameter|Value
---------|-----
Operation type|request
HTTP method|GET
Binding Version|0.1.0

HTTP Query Parameters

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
userId|string||||User Id

## Kafka-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[Kafka-Message](#kafka-message)|

### As Subscriber

#### Operation Bindings

Kafka

Parameter|Value
---------|-----
Binding Version|0.1.0

Consumer Group  Id

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|string||users||

Consumer Id

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|string||guest||

## AMQP-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[AMQP-Message](#amqp-message)|

### As Subscriber

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

## MQTT-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[MQTT-Message](#mqtt-message)|

### As Subscriber

#### Operation Bindings

MQTT

Parameter|Value
---------|-----
QoS|1
Retain|true
Binding Version|0.1.0

# Messages

## HTTP-Message

### Message Bindings

HTTP

Parameter|Value
---------|-----
Binding Version | 0.1.0

HTTP Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
x-apikey|string||||API Key

## Kafka-Message

### Message Bindings

Kafka

Parameter|Value
---------|-----
Binding Version|0.1.0

Message Key

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|string||key||

## AMQP-Message

### Message Bindings

AMQP

Parameter|Value
---------|-----
Content Encoding|gzip
Message Type|user.register
Binding Version|0.1.0

## MQTT-Message

### Message Bindings

MQTT

Parameter|Value
---------|-----
Binding Version|0.1.0

---

*AsyncAPI* *2.0.0*
