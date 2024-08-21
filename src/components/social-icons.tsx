import { FacebookOutlined, GithubOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';
import React from 'react';

const SocialIcons = () => (
    <div className="text-black flex justify-center my-1">
        <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
            <FacebookOutlined />
        </a>
        <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
            <GooglePlusOutlined />
        </a>
        <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
            <GithubOutlined />
        </a>
        <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
            <LinkedinOutlined />
        </a>
    </div>
);

export default SocialIcons;
