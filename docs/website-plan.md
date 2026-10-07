# FSOG website: moving from an archive to a full site

## Where we are

`living-archive/` holds the approved mockups from the PC: a home page, an edition page and a story page for **The Living Archive**, a free fortnightly publication by Fifty Shades of Gay. The CSS comments say these become a **WordPress theme**, and the subscribe form is meant to connect to **Hostinger Reach**.

What we know about FSOG from public coverage:

- Started in **February 2016** by Shubham Mehrotra as a **photo series**, a visual narrative to empower the LGBTQ+ community and start conversations about sexuality, identity and gender.
- It was a response to the lack of positive queer representation in Indian mainstream media. The focus is on **celebration and education**, not only struggle.
- It has grown into a **queer collective** that runs **community and singles events** (covered by Man's World India), and it has been featured by Homegrown, Outlook Traveller and Elle India.
- It posts on Instagram at [@50shadesofgayofficial](https://www.instagram.com/50shadesofgayofficial/).

### Instagram (checked in Chrome, 7 October 2026)

Viewed logged in at [@50shadesofgayofficial](https://www.instagram.com/50shadesofgayofficial/). This replaces the earlier web-fetch summary.

- **Name and category:** FSOG, listed as "Community". **Verified.**
- **Bio (full):** "Queer stories across South Asia & beyond. / Asia's only LGBTQIA+ archive of queer history, culture & community. / Managed by @shubhammehrotraofficial"
- **Counts:** 4,709 posts, 101K followers, 369 following.
- **Link in bio:** fiftyshadesofgay.org
- **Highlights (8, not 11):** BTS@FSOG, Mental Health, HIV 101, 🌼FUN🌼 ("Never have I ever"), 🌼Bisexual🌼, 🌼Aromantics🌼, 🌼Asexuality🌼, GUESSING GAMES. The bi, aro and ace covers are labelled "Myth vs fact". All covers share one style: yellow circle, dark tile, yellow and white type.
- **Three pinned posts:** Li Shiu Tong (Asian sexologist, 1935), "13 ancient cultures" on gender fluidity, and a Chinese diplomat's lesbian daughter who survived Ravensbrück.

**What the posts are now.** The grid is almost entirely **queer history carousels**, from South Asia and around the world: Bhupen Khakhar, Shah Hussain and Madho Lal, Prem Kapoor's *Badnam Basti*, Roy Tan, Dora Richter, Christine Jorgensen, Tchaikovsky, Oscar Wilde, Chinese lesbian networks and more. Posting is close to daily (about 20 carousels since 28 September).

- **Visual template:** an archival or editorial photo (often black and white) filling the frame, a small FSOG badge top left, a bold white sans-serif headline in title case, a one-line dek below it and a "Swipe →" pill. Carousel icon top right.
- **Caption pattern:** a short plug ("Subscribe to The Living Archive, FSOG's free fortnightly newsletter, via the link in bio"), two or three sentences of story, a mission line ("FSOG documents queer histories, people and lives that mainstream narratives leave out"), an educational-use disclaimer, hashtags (#QueerIndianHistory, #LGBTQHistory, #TheLivingArchive), then **photo credits and sources** in full.
- **Tone:** calm, factual and editorial, not slangy. Headlines are hooky ("…Then A Bombay Gallery Took Them Down."), captions are restrained and sourced.
- **Engagement:** typically a few hundred likes; the Tchaikovsky carousel reached about 50.4K likes and 509 comments.

**Key facts the profile adds:**

- **The Living Archive launched on 28 September 2026** to mark 100K followers ("Thank you for building this 100,000 strong community with us"). It is already promoted in every caption, so the newsletter is live and is the main call to action.
- **Origin story, in FSOG's own words:** a post titled *"I Am Not a Criminal": Inside the Indian Campaign That Began Fifty Shades of Gay* says that in 2016 trans people at Mumbai traffic signals held whiteboards asking for work, education and dignity (#IAmNotACriminal). Photographs credited to Shubham Mehrotra and QPhotography. This is a stronger opening for "Our story" than "a photo series", and it should be told this way.
- **Founder handle:** @shubhammehrotraofficial manages the account.

What this means for the plan:

- **Stories, not events, are what FSOG does today.** The feed is an archive in all but name, and The Living Archive is its newsletter. Option A still works as a structure, but the home page should lead with Stories and the Archive.
- **No sign of current events.** Nothing in the recent grid or highlights is an event (BTS@FSOG may hold older behind-the-scenes clips). Move Events below Learn on the home page and show "Get notified" until the client confirms events still run.
- **The highlights make a ready-made Learn hub:** Mental health, HIV 101 and three "Myth vs fact" explainers (bi, aro, ace).
- **The site can borrow the Instagram post template** for story cards: full-bleed archival photo, bold headline, one-line dek. Keep crediting sources and photos on every story, as the captions do.
- **Use "South Asia & beyond"** in the hero; it is the bio's own phrase and the archive covers global history.

> Still to get from the client: whether any events run today (names, cities, frequency), the full-resolution FSOG logo (the profile mark is white "FSOG" with a rainbow ♂/♀ symbol over "Fifty Shades of Gay" on black), and consent for the 2016 campaign photographs.

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
  ├─ Our story (2016 #IAmNotACriminal campaign → collective → archive)
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

## Home page, section by section (draft, waiting for OK before building)

0. **Header.** Plain FSOG wordmark (placeholder until a plain logo arrives). About · Stories · Events · Get involved · Resources · Contact, plus a red Subscribe button. No newspaper masthead.
1. **Hero.** "Celebrating queer India since 2016" (or "South Asia", see below) beside a mosaic of 6–9 portraits in palette-coloured frames, all marked as placeholders. Buttons: *Read the stories* and *Get involved*.
2. **Our story strip.** Three steps: 2016 #IAmNotACriminal campaign → 100K-strong collective → The Living Archive (launched September 2026). Links to About.
3. **What we do.** The staggered colour blocks from "Inside Edition 01": Stories (powder), Events (yellow), Get involved (red), Resources (slate).
4. **From The Living Archive.** Compact latest-edition card with a small masthead badge. The only place the masthead style appears outside the archive.
5. **Learn.** Explainer cards drawn from the Instagram highlights (HIV 101, Mental health, Bi, Ace, Aro).
6. **Events.** Next 2–3 events with date, city and RSVP, or "Get notified" when nothing is scheduled.
7. **Faces of FSOG.** Portrait wall or Instagram feed. Consented images only, with a note saying so.
8. **Numbers and press.** Since 2016, about 101K followers, and the Elle, Homegrown, Outlook Traveller and Man's World logos.
9. **Get involved.** Share your story (anonymous option), volunteer, partner with us.
10. **Subscribe.** The slate block, with two lists (the archive and event alerts) via Hostinger Reach.
11. **Footer.** Navy, with privacy policy and takedown request links.

Open decisions (proposed defaults in brackets):

- Events in slot 5, or lower until the client confirms they run regularly? [slot 6, below Learn: Instagram shows no current events]
- Call the section "Resources" or "Learn"? [Learn]
- Red is reserved for primary buttons. Can Get involved use it as its section colour? [yes]
- Hero wording: "queer India" or "South Asia" (as in the Instagram bio)? [South Asia]

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
