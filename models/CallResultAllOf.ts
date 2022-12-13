/**
 * FreeClimb API
 * FreeClimb is a cloud-based application programming interface (API) that puts the power of the Vail platform in your hands. FreeClimb simplifies the process of creating applications that can use a full range of telephony features without requiring specialized or on-site telephony equipment. Using the FreeClimb REST API to write applications is easy! You have the option to use the language of your choice or hit the API directly. Your application can execute a command by issuing a RESTful request to the FreeClimb API. The base URL to send HTTP requests to the FreeClimb REST API is: /apiserver. FreeClimb authenticates and processes your request.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@freeclimb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AnsweredBy } from './AnsweredBy';
import { CallDirection } from './CallDirection';
import { CallStatus } from './CallStatus';
import { HttpFile } from '../http/http';


interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'callId'?: string;
    'parentCallId'?: string;
    'accountId'?: string;
    '_from'?: string;
    'to'?: string;
    'phoneNumberId'?: string;
    'status'?: CallStatus;
    'startTime'?: string;
    'connectTime'?: string;
    'endTime'?: string;
    'duration'?: number;
    'connectDuration'?: number;
    'direction'?: CallDirection;
    'answeredBy'?: AnsweredBy;
    'subresourceUris'?: any;
}
export class CallResultAllOf {
    /**
    * String that uniquely identifies this Call resource.
    */
    'callId'?: string;
    /**
    * ID of the Call that created this leg (child Call).
    */
    'parentCallId'?: string;
    /**
    * ID of the account that owns this Call.
    */
    'accountId'?: string;
    /**
    * Phone number that initiated this Call.
    */
    '_from'?: string;
    /**
    * Phone number that received this Call.
    */
    'to'?: string;
    /**
    * If the Call was inbound, this is the ID of the IncomingPhoneNumber that received the Call (DNIS). If the Call was outbound, this is the ID of the phone number from which the Call was placed (ANI).
    */
    'phoneNumberId'?: string;
    'status'?: CallStatus;
    /**
    * Start time of the Call (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT). Empty if the Call has not yet been dialed.
    */
    'startTime'?: string;
    /**
    * Time the Call was answered (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT). Empty if the Call has not yet been dialed.
    */
    'connectTime'?: string;
    /**
    * End time of the Call (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT). Empty if the Call did not complete successfully.
    */
    'endTime'?: string;
    /**
    * Total length of the Call in seconds. Measures time between startTime and endTime. This value is empty for busy, failed, unanswered or ongoing Calls.
    */
    'duration'?: number;
    /**
    * Length of time that the Call was connected in seconds. Measures time between connectTime and endTime. This value is empty for busy, failed, unanswered or ongoing Calls.
    */
    'connectDuration'?: number;
    'direction'?: CallDirection;
    'answeredBy'?: AnsweredBy;
    /**
    * The list of subresources for this Call. These include things like logs and recordings associated with the Call.
    */
    'subresourceUris'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "callId",
            "baseName": "callId",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "parentCallId",
            "baseName": "parentCallId",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "phoneNumberId",
            "baseName": "phoneNumberId",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CallStatus",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "connectTime",
            "baseName": "connectTime",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "connectDuration",
            "baseName": "connectDuration",
            "type": "number",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "CallDirection",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "answeredBy",
            "baseName": "answeredBy",
            "type": "AnsweredBy",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "subresourceUris",
            "baseName": "subresourceUris",
            "type": "any",
            "format": "",

            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return CallResultAllOf.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = CallResultAllOf.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

