import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";


export class ValidationPlayer implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        if(!value) {
            throw new BadRequestException(`Email is required`);
        }

        return value;
    }

}