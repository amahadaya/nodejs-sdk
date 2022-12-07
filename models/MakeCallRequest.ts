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

import { HttpFile } from '../http/http';


interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    '_from': string;
    'to': string;
    'applicationId'?: string;
    'sendDigits'?: string;
    'ifMachine'?: string;
    'ifMachineUrl'?: string;
    'timeout'?: number;
    'parentCallId'?: string;
    'privacyMode'?: boolean;
    'callConnectUrl'?: string;
}
export class MakeCallRequest {
    /**
    * Phone number to use as the caller ID. This can be: (a) The To or From number provided in FreeClimb's initial request to your app or (b) Any incoming phone number you have purchased from FreeClimb.
    */
    '_from': string;
    /**
    * Phone number to place the Call to.
    */
    'to': string;
    /**
    * Required if no `parentCallId` or `callConnectUrl` has been provided. ID of the application FreeClimb should use to handle this phone call. FreeClimb will use the `callConnectUrl` and `statusCallbackUrl` set on the application unless the `callConnectUrl` attribute is also provided with the request. In this case, the URL specified in that `callConnectUrl` attribute will be used as a replacement of the `callConnectUrl` originally assigned in the application. If the `callConnectUrl` is not set as either an attribute of the request or as part of the specified application, an error will be provided. The application’s voiceUrl parameter is not used for outbound calls.
    */
    'applicationId'?: string;
    /**
    * String of digits to dial after connecting to the number. It can include digits `0-9`, `*`, and `#`, and allows embedding a pause between the output of individual digits. The default pause is 500 milliseconds. So, a string such as *1234#* will be played in 2 seconds because of the 4 standard pauses implied within the string. A custom pause is specified by including a positive integer wrapped in curly braces: {n}. For more information, see **sendDigits examples** below.
    */
    'sendDigits'?: string;
    /**
    * Specifies how FreeClimb should handle this Call if an answering machine answers it.
    */
    'ifMachine'?: string;
    /**
    * This attribute specifies a URL to which FreeClimb will make a POST request when an answering machine or a fax machine is detected. This URL is required if the ifMachine flag is set to redirect. When ifMachine is set to hangup, ifMachineUrl must not be included in the request. For more information, see **ifMachineUrl example** below.
    */
    'ifMachineUrl'?: string;
    /**
    * Number of seconds that FreeClimb should allow the phone to ring before assuming there is no answer. Default is 30 seconds. Maximum allowed ring-time is determined by the target phone's provider. Note that most providers limit ring-time to 120 seconds.
    */
    'timeout'?: number;
    /**
    * Required if no `applicationId` or `callConnectUrl` has been provided. The ID of the parent Call in the case that this new Call is meant to be treated as a child of an existing Call. This attribute should be included when possible to reduce latency when adding child calls to Conferences containing the parent Call. A call can only be used as a parent once the call is in progress or as an inbound call that is still ringing. An outbound call is considered to be in progress once the `outdialConnect` or `outdialApiConnect` webhook is invoked. An inbound call is ringing when the inbound webhook is invoked. If a `callConnectUrl` attribute is also included with the `parentCallId` in the request, this URL will be used as a replacement of the `callConnectUrl` originally assigned in the parent call.
    */
    'parentCallId'?: string;
    /**
    * Activate privacy mode in order to obscure log data that can potentially expose private information.
    */
    'privacyMode'?: boolean;
    /**
    * The URL that FreeClimb should use to handle this phone call. If an applicationId or parentCallId have already been provided, this callConnectUrl attribute will be used as a replacement of the callConnectUrl originally assigned in the application or parent call.
    */
    'callConnectUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
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
            "name": "applicationId",
            "baseName": "applicationId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "sendDigits",
            "baseName": "sendDigits",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "ifMachine",
            "baseName": "ifMachine",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "ifMachineUrl",
            "baseName": "ifMachineUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": "int32",
            
            
            "defaultValue": 30
        },
        {
            "name": "parentCallId",
            "baseName": "parentCallId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "privacyMode",
            "baseName": "privacyMode",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "callConnectUrl",
            "baseName": "callConnectUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return MakeCallRequest.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = MakeCallRequest.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

