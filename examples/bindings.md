# Bindings 1.0.0

# Servers

## MQTT-Server

Parameter|Value
---------|------
URL|[dummy](dummy)
Protocol|`MQTT` 

### Server Bindings

MQTT

Parameter|Value|Description
---------|-----|-----------
Client Id|`guest`|The client identifier.
Clean session|`true`|Whether to create a persistent connection or not.
Last Will and Testament topic|`/last-wills`|The topic where the Last Will and Testament message will be sent.
Last Will and Testament QoS|`2`|Defines how hard the broker/client will try to ensure that the Last Will and Testament message is received.
Last Will and Testament message|`Guest gone offline.`|Last will and Testament message.
Retain Last Will and Testament message|`false`|Whether the broker should retain the Last Will and Testament message or not.
Keep-Alive|`60`|Interval in seconds of the longest period of time the broker and the client can endure without sending a message.
Binding Version|`0.1.0`|The version of this binding.

# Channels

## WebSockets-Channel

### Channel Bindings

WebSockets

Parameter|Value|Description
---------|-----|-----------
HTTP method|`GET`|The HTTP method to use when establishing the connection.
Binding Version|`0.1.0`|The version of this binding.

HTTP Query Parameters

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`userId`|`string`||||User Id

HTTP Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`x-apikey`|`string`||||API Key

## AMQP-Channel-RoutingKey

### Channel Bindings

AMQP

Exchange

Parameter|Value|Description
---------|-----|-----------
Name|`events`|The name of the exchange.
Type|`topic`|The type of the exchange.
Durable|`true`|Whether the exchange should survive broker restarts or not.
AutoDelete|`false`|Whether the exchange should be deleted when the last queue is unbound from it.
Virtual Host|`/`|The virtual host of the exchange.
Binding Version|`0.1.0`|The version of this binding.

## AMQP-Channel-Queue

### Channel Bindings

AMQP

Queue

Parameter|Value|Description
---------|-----|-----------
Name|`events`|The name of the queue.
Durable|`true`|Whether the queue should survive broker restarts or not.
Exclusive|`false`|Whether the queue should be used only by one connection or not.
AutoDelete|`false`|Whether the queue should be deleted when the last consumer unsubscribes.
Virtual Host|`/`|The virtual host of the queue.
Binding Version|`0.1.0`|The version of this binding.

## HTTP-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[HTTP-Message](#http-message)|

### As Subscriber

#### Operation Bindings

HTTP

Parameter|Value|Description
---------|-----|-----------
Operation type|`request`|Type of operation.
HTTP method|`GET`|HTTP method.
Binding Version|`0.1.0`|The version of this binding.

HTTP Query Parameters

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`userId`|`string`||||User Id

## Kafka-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[Kafka-Message](#kafka-message)|

### As Subscriber

#### Operation Bindings

Kafka

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

Consumer Group  Id

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`string`||`users`||

Consumer Id

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`string`||`guest`||

## AMQP-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[AMQP-Message](#amqp-message)|

### As Subscriber

#### Operation Bindings

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

## MQTT-Channel-Operation

### Messages

Operation|Name|Description
---------|----|-----------
*subscribe*|[MQTT-Message](#mqtt-message)|

### As Subscriber

#### Operation Bindings

MQTT

Parameter|Value|Description
---------|-----|-----------
QoS|`1`|Defines how hard the broker/client will try to ensure that a message is received.
Retain|`true`|Whether the broker should retain the message or not.
Binding Version|`0.1.0`|The version of this binding.

# Messages

## HTTP-Message

### Message Bindings

HTTP

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

HTTP Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`x-apikey`|`string`||||API Key

## Kafka-Message

### Message Bindings

Kafka

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

Message Key

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`string`||`key`||

## AMQP-Message

### Message Bindings

AMQP

Parameter|Value|Description
---------|-----|-----------
Content Encoding|`gzip`|A MIME encoding for the message content.
Message Type|`user.register`|Application-specific message type.
Binding Version|`0.1.0`|The version of this binding.

## MQTT-Message

### Message Bindings

MQTT

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

---

*AsyncAPI* *2.0.0*
