import React from 'react'
import { View, ScrollView, } from 'react-native';

import Post from '../Post/Post';

import PostsProps from './PostsProps';
import PostProps from '../Post/PostProps';

export default function Posts(props:PostsProps) {
    console.log();
    return (
        <ScrollView>
            {props.posts.map((post:PostProps,index:number)=><View key={index}><Post text={post.text} image={post.image} /></View>)}
        </ScrollView>
    )
}
