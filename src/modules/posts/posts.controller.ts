import { Controller, Get, Req, Query, Headers, Param, Post, Body, HttpException, HttpStatus, ForbiddenException, UseFilters, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { DemoFilter } from '../../core/filters/demo.filter';
import { DemoAuthGuard } from '../../core/guards/demo-auth.guard';
@Controller('posts')
// @UseFilters(DemoFilter)
@UseGuards(DemoAuthGuard)
export class PostsController {
    // private readonly demoService;

    constructor(private readonly demoService: DemoService) {
        // this.demoService = demoService;
    }

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
    // index(@Headers('authorization') headers) {
    //     console.log(headers);
    //     return [
    //         {
    //             title: 'posts'
    //         }
    //     ];
    // }
    index() {
        return this.demoService.findAll()
    }
    @Get(':id')
    show(@Param('id', ParseIntPipe) id) {
        console.log(`id: ${typeof id}`);
        return {
            title: `Post ${id}`
        }
    }

    @Post() 
    // store(@Body() post: CreatePostDto) {
    //     console.log(post.title);
    //     return post;
    // }
    @UsePipes(ValidationPipe)
    store(@Body() post: CreatePostDto) {
        // throw new HttpException('没有权限', HttpStatus.FORBIDDEN);
        // throw new ForbiddenException('没有权限');
        this.demoService.create(post);
    }
}
