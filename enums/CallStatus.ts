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

/**
* * `queued` &ndash; Call is ready and waiting in line before going out. * `ringing` &ndash; Call is currently ringing. * `inProgress` &ndash; Call was answered and is currently in progress. * `canceled` &ndash; Call was hung up while it was queued or ringing. * `completed` &ndash; Call was answered and has ended normally. * `busy` &ndash; Caller received a busy signal. * `failed` &ndash; Call could not be completed as dialed, most likely because the phone number was non-existent. * `noAnswer` &ndash; Call ended without being answered.
*/
export enum CallStatus {

    QUEUED = 'queued',
    RINGING = 'ringing',
    IN_PROGRESS = 'inProgress',
    CANCELED = 'canceled',
    COMPLETED = 'completed',
    FAILED = 'failed',
    BUSY = 'busy',
    NO_ANSWER = 'noAnswer'
}


