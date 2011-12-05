<td>
    <a href="<%= obj.url() %>" class="name"><%= obj.get('name') %></a>
</td>
<td>
    <span class="collections has-details"><%= obj.get('count') %></span>
    <div class="details" title="Collections">
        <% if (obj.get('count') > 0) { %>
            <ul>
                <% _.each(_.first(obj.get('collections'), 15), function(collection) { %>
                    <li><%= collection %></li>
                <% }); %>
                <% if (obj.get('count') > 15) { %>
                    <li>&hellip;</li>
                <% } %>
            </ul>
        <% } else { %>
            <em>None.</em>
        <% } %>
    </div>
</td>
<td>
    <span class="size"><%= Genghis.Util.humanizeSize(obj.get('size')) %></span>
</td>
<td class="action-column">
    <button class="btn small danger destroy">Remove</button>
</td>