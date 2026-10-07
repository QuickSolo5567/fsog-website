# FSOG website: moving from an archive to a full site

## Where we are

`living-archive/` holds the approved mockups from the PC: a home page, an edition page and a story page for **The Living Archive**, a free fortnightly publication by Fifty Shades of Gay. The CSS comments say these become a **WordPress theme**, and the subscribe form is meant to connect to **Hostinger Reach**.

What we know about FSOG from public coverage:

- Started in **February 2016** by Shubham Mehrotra as a **photo series**, a visual narrative to empower the LGBTQ+ community and start conversations about sexuality, identity and gender.
- It was a response to the lack of positive queer representation in Indian mainstream media. The focus is on **celebration and education**, not only struggle.
- It has grown into a **queer collective** that runs **community and singles events** (covered by Man's World India), and it has been featured by Homegrown, Outlook Traveller and Elle India.
- It posts on Instagram at [@50shadesofgayofficial](https://www.instagram.com/50shadesofgayofficial/).

> Still to confirm: Instagram content (bio, follower count, recurring event names, cities, highlights). Instagram couldn't be fetched from the build environment, so this needs the client or screenshots.

## The core shift

Right now the site *is* the archive. It needs to work the other way round: **FSOG is the house, and The Living Archive is one room in it.**

The current mockup already points at this. Its nav has "About FSOG", "Events, talks and workshops", "Collaborate" and "Resources", but they all link to `#` anchors. The new site turns them into real sections.

## Three ways to structure it

### Option A: Collective first (recommended)
The home page introduces FSOG as a whole and gives equal weight to its work: **Stories** (archive and portraits), **Events** and **Community**. The Living Archive keeps its newspaper masthead, but only on its own section.
- Best for: a client whose events and community drive most of the activity, which the Instagram and press coverage suggest.

### Option B: Media house
Built like a magazine publisher (think Gaysi or Homegrown). The home page is editorial: the latest edition, portraits and essays, with events as a secondary strip.
- Best for: a client who sees FSOG mainly as a publisher.

### Option C: Events and membership
The home page is built around "what's on": an event calendar, sign-ups and a members' newsletter. The archive sits in the background.
- Best for: a client whose main income or goal is ticketed events.

My pick is **A**. It's the only option that tells the whole FSOG story, from the 2016 photo series to today's events to the archive, and it reuses everything already designed.

## Proposed sitemap (Option A)

```
Home
About
  ├─ Our story (2016 photo series → collective → archive)
  ├─ Team & contributors
  └─ Press & recognition
Stories
  ├─ The Living Archive  (existing design: editions, stories, browse by theme)
  ├─ Portraits / the original photo series ("Shades")
  └─ Voices (first-person essays, community submissions)
Events
  ├─ Upcoming (calendar, RSVP or tickets)
  ├─ Formats (mixers, slow dating, talks, workshops, screenings)
  └─ Past events (photo galleries and recaps)
Get involved
  ├─ Share your story / suggest a story
  ├─ Volunteer & contribute
  ├─ Partner with us (brands, venues, corporate Pride, campuses)
  └─ Support FSOG (donate / merch)
Resources
  └─ Helplines, queer-affirming doctors/therapists/lawyers, reading lists
Subscribe (newsletter)
Contact
```

## Home page, section by section

1. **Manifesto hero.** One line on who FSOG is ("Celebrating queer India since 2016"), with a portrait mosaic from the photo series instead of the single archive image.
2. **What we do.** Three or four blocks, each in a palette colour (powder, yellow, slate, red), reusing the stacked colour-block pattern from "Inside Edition 01": Stories, Events, Community, Resources.
3. **Upcoming events.** The next two or three events with date, city and an RSVP button. If nothing is scheduled, show "Get notified".
4. **From The Living Archive.** A compact version of the existing "latest edition" card, with a link into the archive and its masthead.
5. **Faces of FSOG.** A portrait wall or Instagram feed, as social proof and a nod to the 2016 origin.
6. **Numbers and press.** Years running, events hosted, people reached, and logos from Elle, Homegrown, Outlook Traveller and Man's World.
7. **Partner with us.** A short pitch for brands and venues, aimed at commercial and sponsorship enquiries.
8. **Subscribe.** The existing slate block, reworded to cover the newsletter *and* event alerts.

## Keep the design system, broaden its use

- **Keep:** the paper, ink and five-colour palette, Newsreader and Instrument Sans, hard 2px borders, offset shadows and the accessibility work already done (skip link, focus states, contrast notes).
- **Give each section a colour:** Stories = powder, Events = yellow, Community = red, Resources = slate. Visitors then always know where they are.
- **Keep the newspaper masthead only on The Living Archive pages.** The rest of the site gets a lighter header with the FSOG logo. The current logo is "FSOG | The Living Archive", so the main site needs a plain FSOG version.
- **Bring in more photography.** FSOG began as a photo project, so the main site should lean on people's faces much more than the archive does.

## Build (WordPress, as already planned)

| Need | Approach |
|---|---|
| Theme | A custom theme built from `assets/site.css` |
| Content types | Custom post types: `edition`, `story`, `event`, `portrait`, `resource`, `partner` |
| Archive taxonomy | The existing categories: People, Places, Art & culture, Love & intimacy, Activism, Nightlife, South Asia, Global |
| Events | The Events Calendar plugin, *or* event pages linking to an external ticketing tool (Luma, Townscript, Insider), which is simpler if they already sell tickets elsewhere |
| Newsletter | Hostinger Reach, with separate lists for the archive and event alerts |
| Instagram | An embedded feed (e.g. Smash Balloon) on Home and Events |
| Story submissions | A private form (WPForms or Gravity Forms) with an option to stay anonymous |
| Comments | The moderated comments already designed on `story.html` |
| Privacy | No real names or faces without consent, a takedown request route, and minimal analytics. This matters a lot for a queer audience in India. |

## Phases

1. **Discovery (this week).** Confirm the structure with the client, collect the Instagram content, logos, event history and press links.
2. **Design.** Mock up Home, About, Events listing, Event detail and Get involved in the existing style. The archive pages are already done.
3. **Build.** WordPress theme, post types, forms and newsletter connection.
4. **Content and launch.** Load events, portraits and the first archive edition, then go live on fiftyshadesofgay.org.

## Questions for the client

1. What does FSOG want the site to *do* first: grow the community, sell event tickets, find sponsors, or publish?
2. Which events run regularly (names, cities, how often)? How are tickets or RSVPs handled today?
3. Can we use the original 2016 photo series on the site? Are consents in place?
4. Who is on the team, and do they want to be named publicly?
5. Is there any revenue goal: donations, memberships, merch, brand partnerships?
6. Is the domain fiftyshadesofgay.org confirmed, and is hosting on Hostinger?
7. Should the site be English only, or also Hindi or other languages?
