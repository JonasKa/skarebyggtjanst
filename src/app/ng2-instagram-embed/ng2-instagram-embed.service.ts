import {Injectable} from "@angular/core";
import {Jsonp} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

/**
 * Currently the instagram-embed.js script is included in order for the images to show up in Oembed scenarios, with a function
 * call: instgrm.Embeds.process() The script is included in angular-cli.json. If not working, update instagram-embed.js
 * from http://platform.instagram.com/en_US/embeds.js
 */

@Injectable()
export class Ng2InstagramEmbedService {

  _instaOembedURL = 'https://api.instagram.com/oembed?url=http://instagr.am/p/{user}/&omitscript=false&callback=JSONP_CALLBACK';
  _instaShortCodeURL = 'https://www.instagram.com/{user}/media/?min_id=1045341392067624850_3108326&callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) {
  }

  public getOembedForShortCode(shortCode: string): Observable<any> {
    return this.jsonp.get(this._instaOembedURL.replace('{user}', shortCode))
      .map(result => {
        const jsonResult = result.json();
        (window as any).instgrm.Embeds.process();
        return jsonResult.html;
      });
  }

  /**
   * Using the suggestion mentioned here: http://stackoverflow.com/a/33783840
   * @param userName
   * @returns {Observable<T>}
   */
  public getAllShortCodesForUserName(userName: string): Observable<string[]> {
    return this.jsonp.get(this._instaShortCodeURL.replace('{user}', userName)).map(result => {
      let jsonResult = result.json();
      //    this.instaImageHtml = jsonResult.html;
      //  console.log('instaImageHtml: ' + this.instaImageHtml);
      return [];
    }).share();
  }

  private getShortCode(feed: string): string {
    return ''
  }

}
