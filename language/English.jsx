import React from "react";

export const BODY = () => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      An upcoming multiplayer mod for <em>Grand Theft Auto: San Andreas</em> that will be fully backwards compatible with the existing multiplayer mod <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      This means <strong>the existing SA:MP client and all existing SA:MP scripts will work with open.mp</strong> and, in addition to this, many bugs will also be fixed within the server software without the need for hacks and workarounds.
    </p>
    <p>
      If you're wondering when the public release is planned or how you can help contribute to the project, please see <a href="https://www.burgershot.gg/showthread.php?tid=99">this forum thread</a> for more information.
    </p>
    <h1>
      <a href="/faq">FAQ</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>What is open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) is a substitute multiplayer mod for San Andreas, initiated in response to the unfortunate increase in problems with updates and management of SA:MP. The initial release will be a drop-in replacement for the server only. Existing SA:MP clients will be able to connect to this server. In the future, a new open.mp client will become available, allowing more interesting updates to be released.</p>
    <hr />
    <h2>Is it a fork?</h2>
    <p>No. This is a complete rewrite, taking advantage of decades of knowledge and experience. There have been attempts to fork SA:MP before, but we believe these had two major problems:</p>
    <ol>
      <li>They were based on leaked SA:MP source code. The authors of these mods had no legal right to this code, and were thus always on the back foot, both morally and legally. We outright refuse to use this code. This slightly hampers development speed, but is the right move in the long-run.</li>
      <li>They tried to reinvent too much at once. Either replacing all the scripting engine, or removing features while adding new ones, or just tweaking things in incompatible ways. This prevents existing servers with huge codebases and playerbases from moving over, as they would have to rewrite some, if not all, of their code - a potentially massive undertaking. We fully intend to add features, and tweak things, over time, but we are also focussed on supporting existing servers, allowing them to use our code without changing theirs.</li>
    </ol>
    <hr />
    <h2>Why are you doing this?</h2>
    <p>Despite numerous attempts to push SA:MP development forward officially, in the form of suggestions, chivvying, and offers of help from the beta team; alongside a community crying out for anything new at all; no progress was seen at all. This was widely believed to be simply down to a lack of interest on the part of the mod leadership, which is not a problem in itself, but there was no line of succession. Rather than handing development reigns over to those interested in continuing to work on the mod, the founder simply wanted to bring everything down with himself, while apparently stringing things along as long as possible for minimal effort. Some claim this is for passive income reasons, but there is no evidence of that. Despite huge interest, and a strong and familial community, he believed there was only 1-2 years left in the mod, and that the community that had worked so hard to make SA:MP what it is today did not deserve a continuation.</p>
    <br />
    <p>We disagree.</p>
    <hr />
    <h2>Since it is "Open" Multiplayer, will this be open-source?</h2>
    <p>Eventually that is the plan, yes. For now we are trying to make the development open in terms of communication and transparency (which in itself is an improvement), and will move towards open-sourcing as and when we can, once things are all sorted and settled down.</p>
    <hr />
    <h2>How can I help?</h2>
    <p>Keep your eyes on the forums. We have a topic for exactly this, and will keep it updated as more work becomes available. While the project was revealed a little earlier than intended, we are already well on the way to an initial release, but that doesn't mean more help is not always massively appreciated. Thank you in advance for taking an interest, and believing in the project:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"How to help" topic (burgershot.gg)</u>
    </a>
    <hr />
    <h2>What is burgershot.gg?</h2>
    <p>burgershot.gg is a gaming forum, nothing more. A lot of the people are involved in both, and some OMP development and updates are posted there, but they are two independent projects. They are not the OMP forums, nor is OMP a burgershot property. Once a full OMP site is up and running, the two can be extricated from each other (much as SA:MP was once hosted by GTAForums before it's own site was up).</p>
    <hr />
    <h2>What about OpenMP?</h2>
    <p>The Open Multi-Processing project is "OpenMP", we are "open.mp". Totally different.</p>
  </div>
);
