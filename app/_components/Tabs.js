import { Tab } from "@headlessui/react";
import React from 'react'

const AccountPage = () => {
    const tabs = ["profile", "subscription", "settings"];
    return (
        <div>
            <Tab.Group>
                <Tab.List>
                    {tabs.map((tab) => (
                        <Tab key={tab}>{tab + "/"}</Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Profile Content</Tab.Panel>
                    <Tab.Panel>Subscription Content</Tab.Panel>
                    <Tab.Panel>Settinhngs Content</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default AccountPage;