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

import { AddToConference } from './AddToConference';
import { CreateConference } from './CreateConference';
import { Dequeue } from './Dequeue';
import { Enqueue } from './Enqueue';
import { GetDigits } from './GetDigits';
import { GetSpeech } from './GetSpeech';
import { Hangup } from './Hangup';
import { OutDial } from './OutDial';
import { Pause } from './Pause';
import { PerclCommand } from './PerclCommand';
import { Play } from './Play';
import { PlayEarlyMedia } from './PlayEarlyMedia';
import { RecordUtterance } from './RecordUtterance';
import { Redirect } from './Redirect';
import { Reject } from './Reject';
import { RemoveFromConferenceAllOf } from './RemoveFromConferenceAllOf';
import { Say } from './Say';
import { SendDigits } from './SendDigits';
import { SetListen } from './SetListen';
import { SetTalk } from './SetTalk';
import { Sms } from './Sms';
import { StartRecordCall } from './StartRecordCall';
import { TerminateConference } from './TerminateConference';
import { HttpFile } from '../http/http';

/**
* The `RemoveFromConference` command removes a Participant from a Conference but does not hang up. Instead, the Call is simply unbridged and what happens next with the Call is determined by the PerCL returned in response to the `leaveConferenceUrl` attribute.
*/
export class RemoveFromConference extends PerclCommand {
    /**
    * ID of the Call leg to be removed from the Conference. The Call must be in a Conference or an error will be triggered.
    */
    'callId': string;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callId",
            "baseName": "callId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RemoveFromConference.attributeTypeMap);
    }

    public constructor() {
        super();
        this.command = "RemoveFromConference";
        this.command = "RemoveFromConference";
    }
}

