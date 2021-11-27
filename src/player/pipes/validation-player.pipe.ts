import { ArgumentMetadata, PipeTransform } from "@nestjs/common";


export class ValidationPlayer implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value);
        console.log(metadata);

        return value;
    }

}