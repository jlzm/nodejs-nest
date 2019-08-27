import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
    @Get()
    // index(@Req() req) {
    //     console.log(`req.ip${req.ip} req.hostname:${req.hostname} req.method:${req.method}`);
    //     return [
    //         {
    //             title: 'posts'
    //         }
    //     ];
    // }
    // index(@Query() query) {
    //     console.log(query);
    //     return [
    //         {
    //             title: 'posts'
    //         }
    //     ];
    // }
    index(@Headers('authorization') headers) {
        console.log(headers);
        return [
            {
                title: 'posts'
            }
        ];
    }
    @Get(':id')
    show(@Param() params) {
        return {
            title: `Post ${params.id}`
        }
    }

    @Post() 
    store(@Body() post: CreatePostDto) {
        console.log(post.title);
        return post;
    }
}
