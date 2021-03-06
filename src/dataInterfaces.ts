/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import powerbi from "powerbi-visuals-api";

import { valueFormatter } from "powerbi-visuals-utils-formattingutils";
import IValueFormatter = valueFormatter.IValueFormatter;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

// do selectable datapoints ...
import { interactivitySelectionService } from "powerbi-visuals-utils-interactivityutils";
import SelectableDataPoint = interactivitySelectionService.SelectableDataPoint;
import ISelectionId = powerbi.visuals.ISelectionId;



import { numericSequence } from "powerbi-visuals-utils-typeutils";

export interface DataPoint extends SelectableDataPoint {
    category: string[];
    uniqueCategory: string;
    group: string;
    values: Measure[];
    color: string;
    tooltipInfo?: VisualTooltipDataItem[];
}

export interface Measure {
    measureName: string;
    measureValue: string;
}

export interface ChartData {
    dataPoints: DataPoint[];
    categories: string[][];
    uniqueCategories: string[]
    groups: string[];
    categoryValueFormatter: IValueFormatter;
    valueFormatter: IValueFormatter;
}

export interface IMargin {
    left?: number;
    right?: number;
    bottom?: number;
    top?: number;
}

export interface ChartSizes {
    vpHeight: number;
    vpWidth: number;
    radarR: number;
    radarCX: number;
    radarCY: number;
    axisLabelHeight: number;
    angleOffSet: number;
    legendHeight: number;
}

export interface BgSegment {
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    category: powerbi.PrimitiveValue;
    ring: number;
}

export interface GroupLabelData {
    idx: number;
    name: string;
    symbol: any;
    xPos: number;
}

export interface FieldLine {
    minValue: powerbi.PrimitiveValue;
    maxValue: powerbi.PrimitiveValue;
    minImpact: powerbi.PrimitiveValue;
    colorGroup: powerbi.PrimitiveValue;
    fieldID: string;
    fieldLabel: string;
    identity: any;
}

export interface VISelectionId extends ISelectionId {

}

export interface IColorArray {
    3: string[];
    4: string[];
    5: string[];
    6: string[];
    7: string[];
    8: string[];
    9?: string[];
    10?: string[];
    11?: string[];
    12?: string[];
    13?: string[];
    14?: string[];
}

export interface IColorBrewer {
    YlGn: IColorArray;
    YlGnBu: IColorArray;
    GnBu: IColorArray;
    BuGn: IColorArray;
    PuBuGn: IColorArray;
    PuBu: IColorArray;
    BuPu: IColorArray;
    RdPu: IColorArray;
    PuRd: IColorArray;
    OrRd: IColorArray;
    YlOrRd: IColorArray;
    YlOrBr: IColorArray;
    Purples: IColorArray;
    Blues: IColorArray;
    Greens: IColorArray;
    Oranges: IColorArray;
    Reds: IColorArray;
    Greys: IColorArray;
    PuOr: IColorArray;
    BrBG: IColorArray;
    PRGn: IColorArray;
    PiYG: IColorArray;
    RdBu: IColorArray;
    RdGy: IColorArray;
    RdYlBu: IColorArray;
    Spectral: IColorArray;
    RdYlGn: IColorArray;
    Accent: IColorArray;
    Dark2: IColorArray;
    Paired: IColorArray;
    Pastel1: IColorArray;
    Pastel2: IColorArray;
    Set1: IColorArray;
    Set2: IColorArray;
    Set3: IColorArray;
}

export interface IColorBrewerSettings {
    inputMin?: number;
    inputMax?: number;
    steps?: number;
    usebrewer: boolean;
    brewer?: string;
    gradientStart?: string;
    gradientEnd?: string;
}