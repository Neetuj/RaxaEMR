/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/**
 * This panel will overlay when a patient is pressed for 2 seconds.
 * This is a form that shows the patient summary
 */
Ext.define('Screener.view.PatientSummary', {
    xtype: 'patientSummary',
    extend: 'Ext.Panel',
    id: 'patientSummary',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: false,
        // Set the width and height of the panel
        width: 400,
        height: 260,
        scrollable: true,
        items: [{
            xtype: 'titlebar',
            title: 'Patient Summary',
            layout: {
                align: 'center',
                type: 'hbox'
            }
        }, {
            xtype: 'textfield',
            id: 'name',
            label: 'Name',
            width: '100%',
            value: '',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'textfield',
            id: 'gen',
            label: 'Gender',
            width: '100%',
            value: 'Male',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'textfield',
            id: 'age',
            label: 'Age',
            width: '100%',
            value: '18',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'textfield',
            id: 'bmi',
            label: 'BMI',
            width: '100%',
            value: '22',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'textfield',
            id: 'idno',
            label: 'ID#',
            width: '100%',
            value: '1',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'textfield',
            id: 'vill',
            label: 'Village',
            width: '100%',
            value: 'abc',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'textfield',
            id: 'dis',
            label: 'District',
            width: '100%',
            value: 'xyz',
            disabled: 'true',
            disabledCls: 'x-item',
        }, {
            xtype: 'titlebar',
            title: 'Last Encounter',
            layout: {
                align: 'center',
                type: 'hbox'
            }
        }, {
            xtype: 'label',
            id: '1',
            html: '',
            width: '100%',
        }, {
            xtype: 'label',
            id: '2',
            html: '',
            width: '100%',
        }, {
            xtype: 'label',
            id: '3',
            html: '',
            width: '100%',
        }, {
            xtype: 'label',
            id: '4',
            html: '',
            width: '100%',
        }, {
            xtype: 'label',
            id: '5',
            html: '',
            width: '100%',
        }]
    }
});