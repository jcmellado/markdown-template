# Bindings 1.0.0

## Table of Contents

* [1. Servers](#1.-servers)
    * [1.1. MQTT-Server](#1.1.-mqtt-server)
* [2. Channels](#2.-channels)
    * [2.1. WebSockets-Channel](#2.1.-websockets-channel)
    * [2.2. AMQP-Channel-RoutingKey](#2.2.-amqp-channel-routingkey)
    * [2.3. AMQP-Channel-Queue](#2.3.-amqp-channel-queue)
    * [2.4. HTTP-Channel-Operation](#2.4.-http-channel-operation)
    * [2.5. Kafka-Channel-Operation](#2.5.-kafka-channel-operation)
    * [2.6. AMQP-Channel-Operation](#2.6.-amqp-channel-operation)
    * [2.7. MQTT-Channel-Operation](#2.7.-mqtt-channel-operation)
* [3. Messages](#3.-messages)
    * [3.1. HTTP-Message](#3.1.-http-message)
    * [3.2. Kafka-Message](#3.2.-kafka-message)
    * [3.3. AMQP-Message](#3.3.-amqp-message)
    * [3.4. MQTT-Message](#3.4.-mqtt-message)

# 1. Servers

## 1.1. MQTT-Server

Parameter|Value
---------|------
URL|[dummy](dummy)
Protocol|`MQTT`

### 1.1.1. Bindings

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

# 2. Channels

## 2.1. WebSockets-Channel

### 2.1.1. Bindings

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

## 2.2. AMQP-Channel-RoutingKey

### 2.2.1. Bindings

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

## 2.3. AMQP-Channel-Queue

### 2.3.1. Bindings

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

## 2.4. HTTP-Channel-Operation

### 2.4.1. Messages

Operation|Message|Description
---------|-------|-----------
*subscribe*|[HTTP-Message](#3.1.-http-message)|

### 2.4.2. As Subscriber

#### 2.4.2.1. Bindings

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

## 2.5. Kafka-Channel-Operation

### 2.5.1. Messages

Operation|Message|Description
---------|-------|-----------
*subscribe*|[Kafka-Message](#3.2.-kafka-message)|

### 2.5.2. As Subscriber

#### 2.5.2.1. Bindings

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

## 2.6. AMQP-Channel-Operation

### 2.6.1. Messages

Operation|Message|Description
---------|-------|-----------
*subscribe*|[AMQP-Message](#3.3.-amqp-message)|

### 2.6.2. As Subscriber

#### 2.6.2.1. Bindings

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

## 2.7. MQTT-Channel-Operation

### 2.7.1. Messages

Operation|Message|Description
---------|-------|-----------
*subscribe*|[MQTT-Message](#3.4.-mqtt-message)|

### 2.7.2. As Subscriber

#### 2.7.2.1. Bindings

MQTT

Parameter|Value|Description
---------|-----|-----------
QoS|`1`|Defines how hard the broker/client will try to ensure that a message is received.
Retain|`true`|Whether the broker should retain the message or not.
Binding Version|`0.1.0`|The version of this binding.

# 3. Messages

## 3.1. HTTP-Message

### 3.1.1. Bindings

HTTP

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

HTTP Headers

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`x-apikey`|`string`||||API Key

## 3.2. Kafka-Message

### 3.2.1. Bindings

Kafka

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

Message Key

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`string`||`key`||

## 3.3. AMQP-Message

### 3.3.1. Bindings

AMQP

Parameter|Value|Description
---------|-----|-----------
Content Encoding|`gzip`|A MIME encoding for the message content.
Message Type|`user.register`|Application-specific message type.
Binding Version|`0.1.0`|The version of this binding.

## 3.4. MQTT-Message

### 3.4.1. Bindings

MQTT

Parameter|Value|Description
---------|-----|-----------
Binding Version|`0.1.0`|The version of this binding.

---

*AsyncAPI* *2.0.0*
