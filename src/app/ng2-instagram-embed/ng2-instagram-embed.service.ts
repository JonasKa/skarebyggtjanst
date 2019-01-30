import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

/**
 * Currently the instagram-embed.js script is included in order for the images to show up in Oembed scenarios, with a function
 * call: instgrm.Embeds.process() The script is included in angular-cli.json. If not working, update instagram-embed.js
 * from http://platform.instagram.com/en_US/embeds.js
 */

@Injectable()
export class Ng2InstagramEmbedService {

    _instaOembedURL = 'https://api.instagram.com/oembed?url=http://instagr.am/p/{user}/&omitscript=true&callback=JSONP_CALLBACK&hidecaption=false';
    _instaShortCodeURL = 'https://www.instagram.com/{user}/media/?min_id=1045341392067624850_3108326&callback=JSONP_CALLBACK';

    constructor(private http: HttpClient) {
    }

    public getOembedForShortCode(shortCode: string): Observable<any> {
        return this.http.jsonp(this._instaOembedURL.replace('{user}', shortCode), 'arne')
            .pipe(result => {
                (window as any).instgrm.Embeds.process();
                return result['html'];
            });
    }
}
