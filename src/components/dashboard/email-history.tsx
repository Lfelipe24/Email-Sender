import React, { useEffect, useState } from 'react'
import { CardComponent } from "@/components/globals/card"
import { Button, Checkbox, List } from 'antd';
import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import { emailHistoryDummy } from "@/lib/dummy-data/dummy-data"

export const EmailHistory = () => {
    const [checked, setChecked] = useState<string[]>([]);
    const [checkAll, setCheckAll] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);

    useEffect(() => {
        setIndeterminate(!!(checked.length && checked.length !== emailHistoryDummy.length));
        setCheckAll(checked.length === emailHistoryDummy.length);
    }, [checked]);

    const onCheckAllChange = (e: any) => {
        setChecked(e.target.checked ? emailHistoryDummy.map((item) => item.title) : []);
        setCheckAll(e.target.checked);
    };


    return (
        <CardComponent title='Emails History'>
            <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
            />
            <Button className='ml-2 !text-gray-500' type='text' icon={<ReloadOutlined />} />
            <Checkbox.Group
                className='w-full'
                value={checked}
                onChange={(checkedValues) => {
                    setChecked(checkedValues);
                }}
            >
                <List
                    className='w-full'
                    itemLayout="horizontal"
                    dataSource={emailHistoryDummy}
                    pagination={{ position: "bottom" }}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Checkbox value={item.title} />}
                                title={<p>{item.subject}</p>}
                                description={item.message}
                            />
                            <Button className='!text-red-600' type='text' icon={<DeleteOutlined />} />
                        </List.Item>
                    )}
                />
            </Checkbox.Group>
        </CardComponent>
    )
}
