/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { StaticProvider } from '@angular/core';
import { MeasureValues } from './measure_values';
import { Metric } from './metric';
import { Reporter } from './reporter';
import { Validator } from './validator';
import { WebDriverAdapter } from './web_driver_adapter';
/**
 * The Sampler owns the sample loop:
 * 1. calls the prepare/execute callbacks,
 * 2. gets data from the metric
 * 3. asks the validator for a valid sample
 * 4. reports the new data to the reporter
 * 5. loop until there is a valid sample
 */
export declare class Sampler {
    private _driver;
    private _metric;
    private _reporter;
    private _validator;
    private _prepare;
    private _execute;
    private _now;
    static PROVIDERS: StaticProvider[];
    constructor(_driver: WebDriverAdapter, _metric: Metric, _reporter: Reporter, _validator: Validator, _prepare: Function, _execute: Function, _now: Function);
    sample(): Promise<SampleState>;
    private _iterate;
    private _report;
}
export declare class SampleState {
    completeSample: MeasureValues[];
    validSample: MeasureValues[] | null;
    constructor(completeSample: MeasureValues[], validSample: MeasureValues[] | null);
}
